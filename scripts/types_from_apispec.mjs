/**************************************************************\
 * This scripts generates and updates the Typescript models   *
 * from the current gridscale Open API specification          *
 *                                                            *
 * Usage: run it with node >=14.14 and it does everything     *
 * for you!                                                   *
 * Find the result in src/src/Objects/model                   *
\**************************************************************/

import http from 'https';
import fs from 'fs';
import jsYaml from 'js-yaml';
import OpenAPI from 'openapi-typescript-codegen';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const specFile = __dirname + '/spec.yaml';
const specUrl = "https://gsapispecsfordocs.eu-central-1.gos3.io/publicapi/gsapispec.json";
const distDir = __dirname + '/../NewSpecs';


/**
 * convert "import|export type { ... } from ..." to 
 *         "import|export { ... } from ..." to be compatible to Typescript < 3.8
 * @param {*} distDir 
 */
const removeTypeImExportRecursive = (distDir) => {
    const files = fs.readdirSync(distDir);

    files.forEach(file => {
        const stats = fs.statSync(distDir + '/' + file);
        if (stats.isDirectory()) {
            removeTypeImExportRecursive(distDir + '/' + file);
            return;
        }

        const source = fs.readFileSync(distDir + '/' + file, 'utf-8');
        const target = source.replace(/(export|import) type \{/mg, '$1 {');
        fs.writeFileSync(distDir + '/' + file, target);
        console.log(chalk.cyan(distDir + '/' + file + ' - written'));


    });
}

fs.mkdirSync(distDir, { recursive: true });

// first download the current API Spec
const file = fs.createWriteStream(specFile);
console.log('Downloading ' + specUrl + ' ...');
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

            if (yaml.info && yaml.info.version) {
                // generate API version badge
                console.log('YAML VERSION', yaml.info.version);
                // download a API version badge
                const badgeFile = fs.createWriteStream(__dirname + '/../apiversion.png');
                http.get('https://raster.shields.io/badge/Compatible%20with%20gridscale%20API-' + yaml.info.version + '-6bb7c4.png', function (response) {
                    response.pipe(badgeFile);
                    badgeFile.on('finish', function () {
                        badgeFile.close();
                    });
                });
            }


            // clean the dist dir
            if (fs.existsSync(distDir)) {
                fs.rmSync(distDir, { recursive: true });
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

                console.warn(chalk.bgYellow('I put all new Specs into ' + chalk.bold(distDir) + '. Copy the specs your interested in into ' + chalk.bold('src/Specs') + '.'));
                console.warn(chalk.bgYellow('If you overrride existing ones, check all the new and changed properties if that makes sense. Also only copy the specs you need, do not just "update everything"!!!. The specs from the API docs are not always correct...'));


            });



        });
    });
}).on('error', function (err) { // Handle errors
    fs.unlink(specFile); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
});



