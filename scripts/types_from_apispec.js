/**************************************************************\
 * This scripts generates and updates the Typescript models   *
 * from the current gridscale Open API specification          *
 *                                                            *
 * Usage: run it with node >=14.14 and it does everything     *
 * for you!                                                   *
 * Find the result in src/src/Objects/model                   *
\**************************************************************/

const http = require('https');
const fs = require('fs');
const jsYaml = require('js-yaml');
const OpenAPI = require('openapi-typescript-codegen');
const babel = require('@babel/core');

const specFile = __dirname + '/spec.yaml';
const specUrl = "https://ce85b99cc46752fffee35cab9a7b0278abb4c2d2055cff685af4912c49490f8.gos3.io/spec.yaml";
const distDir = __dirname + '/../src/Specs';

const removeTypeImExportRecursive = (distDir) => {
    fs.readdir(distDir, (err, files) => {
        if (err) {
            console.error('readdir err', err);
            return;
        }
        files.forEach(file => {
            const stats = fs.statSync(distDir + '/' + file);
            if (stats.isDirectory()) {
                removeTypeImExportRecursive(distDir + '/' + file);
                return;
            }

            const source = fs.readFileSync(distDir + '/' + file, 'utf-8');
            const target = source.replace(/(export|import) type \{/mg, '$1 {');
            fs.writeFileSync(distDir + '/' + file, target);
            console.log(distDir + '/' + file + ' - written');
            
            
        });
    });
}

// first download the current API Spec
const file = fs.createWriteStream(specFile);
console.log('Downloading '+ specUrl + ' ...');
http.get(specUrl, function (response) {
    response.pipe(file);
    file.on('finish', function () {
        console.log('Download finished, generating ...');
        // cleanly close the file on finish...
        file.close(() => {

            // read in the yaml file (yes, the openAPI lib can also parse yaml but we want to fix a thing)
            const yaml = jsYaml.load(fs.readFileSync(specFile, 'utf8'));
            if (yaml.definitions) {
                // add a `type`="object" property to the definitions that have no type
                for (var x in yaml.definitions) {
                    if (yaml.definitions.hasOwnProperty(x)) {
                        if (yaml.definitions[x].type === undefined) {
                            yaml.definitions[x].type = 'object';
                        } 
                    }
                }
            }
            

            // clean the dist dir
            if (fs.existsSync(distDir)) {
                fs.rmSync(distDir, { recursive: true });
            }


            // ...then generate the types
            OpenAPI.generate({
                exportModels: true,
                exportSchemas: true,
                exportCore: false,
                exportServices: false,
                input: yaml,
                output: distDir,
                useUnionTypes: true
            }).then(() => {
                console.log('Done generating from OpenAPI, now babeling...');

                removeTypeImExportRecursive(distDir);

                
            });

            
            
        });
    });
}).on('error', function (err) { // Handle errors
    fs.unlink(specFile); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
});



