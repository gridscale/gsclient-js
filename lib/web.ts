/// <reference path="../typings/index.d.ts" />

var Client = require('./gridscale').Client;

window['gs'] = {
    Client : Client
};
