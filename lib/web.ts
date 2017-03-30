/// <reference path="../typings/index.d.ts" />

var Client = require('./gridscale.ts').Client;

window['gs'] = {
    Client : Client
};
