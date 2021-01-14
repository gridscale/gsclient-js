/**************************************************************\
 * This scripts generates and updates the Typescript models   *
 * from the current gridscale Open API specification          *
 *                                                            *
 * Usage: run it with node >=12 and it does everything        *
 * for you!                                                   *
 * Find the result in src/src/Objects/model                   *
\**************************************************************/

const http = require('https');
const fs = require('fs');
const OpenAPI = require('openapi-typescript-codegen');

const specFile = __dirname + '/spec.yaml';
const specUrl = "https://gridscale.io/en/api-documentation/spec.yaml";

// first download the current API Spec
const file = fs.createWriteStream(specFile);
console.log('Downloading '+ specUrl + ' ...');
http.get(specUrl, function (response) {
    response.pipe(file);
    file.on('finish', function () {
        console.log('Download finished, generating ...');
        // cleanly close the file on finish...
        file.close(() => {
            // ...then generate the types
            OpenAPI.generate({
                exportModels: true,
                exportSchemas: true,
                exportCore: false,
                exportServices: false,
                input: specFile,
                output: __dirname + '/../src/src/Objects/model',
            }).then(() => {
                console.log('Done!');
            });
            
        });
    });
}).on('error', function (err) { // Handle errors
    fs.unlink(specFile); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
});;



