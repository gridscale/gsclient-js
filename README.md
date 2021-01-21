[![npm version](https://badge.fury.io/js/%40gridscale%2Fapi.svg)](https://badge.fury.io/js/%40gridscale%2Fapi)

# gridscale JavaScript client library

This is the JavaScript library for our public API. We developed this package for our [Panels](https://my.gridscale.io) and want to share it with you.

## Prerequisites
To be able to use this client, a number of steps need to be taken. First a gridscale account will be required, which can be created [here](https://my.gridscale.io/signup/). Then an API-token [should be created](https://my.gridscale.io/APIs/).

## Installation

Install the package by npm running
```sh
npm i @gridscale/api --save
```

or clone this repo and run
```sh
npm i
npm build-browser
```
This will build the client into the `dist` directory.

## Using the client
### In a browser

After installing, generate the library for browsers by running
```sh
npm run build-browser
```

This will create the `dist/client.js` file which you will need.

Then in your HTML you use
```html
  <html>
  <head>
    <meta charset="utf-8" />
    <script type="text/javascript" src="client.js"></script>
  </head>
  <body>...</body>
  <script type="text/javascript">
    var client = new gridscale.Client('[API-Token]', '[User-UUID]')
    //client.Server.list()...
    </script>
  </html>
```

### In Node.js
```js
const gridscale = require("@gridscale/api").gridscale;
const client = new gridscale.Client("[API-Token]", "[User-UUID]");
```

## API Documentation 
For details to all API endpoints and their methods, you should refer to the **official API documentation** here - https://gridscale.io/en/api-documentation/index.html

## Demo 
Test basic functionality in our [Demo](https://gridscale.github.io/gs_api_node/example/index.html)


## Client settings

### Global options

You can set global options, which apply on every object type when creating the client. The third parameter of the constructor can be used for options

**Example**

```js
const client = new gridscale.Client("[API-Token]", "[User-UUID]", {
  limit: 25, // Default page-size for list response
  watchdelay: 100, // Delay between the single requests when watching a job (RequestID)
});
```

You can also set the options only for specific object types by using the `setDefaults` function for an object. This will override the global settings

**Example**

```js
client.Server.setDefaults({
    page  : 0,    // Index of Page
    limit : 25,   // Number of Objects per page
    offset: 0,    // Offset from start,
    sort  : [-name,+object_uuid], // Sort by fileds
    fields : [name,object_uuid,...], // Fields that should get included into the Response
    filter : [name='name',capacity<=30] //  Only return data that matches the filter
});
```

You can also set the options for a single request to filter your objects. This will override global and per-object-type settings

**Example**

```js
client.Server.list({
  page: 0,
  limit: 10,
  sort: "name",
  fields: ["name", "object_uuid"],
  filter: ["memory>16"],
}).then(_callback);
```

In this example the result will be the first 10 servers with more then 16GB of memory. Sorted by name and only returning the `name` and the `object_uuid`.

### Available filter operators:

Here you find an overview of the filter operators available when using the `filter` option.

"=" String or value comparison: exact match  
"<>" String or value comparison: does not match  
"<" Value less than  
">" Value greater than  
"<=" Value less or equal  
">=" Value greater or equal

### Callback Functions and Promises

All requests and actions for the objects return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). You are also free to use a callback style for each action. The last parameter of each method accepts a callback function. Both, Promise and callback receive the same result object that gets passed to the function

**Example with Promise**

```js
client.Server.list().then(
  function (result) {
    // do something when the request succeeded. result is the result object described below
    console.log(result);
  },
  (error) => {
    // handle when the request is failed, error.result contains the result object described below
    console.error(error.result);
  }
);
```

**Example with callback**

```js
client.Server.list({}, (response, result) => {
  // for historical reasons, the callbacks first parameter is the raw Response from Javascript fetch(), second parameter is the result object described below

  if (result.success) {
    // do something when the request succeeded. result is the result object described below
    console.log(result);
  } else {
    // handle when the request is failed, error.result contains the result object described below
    console.error(result);
  }
});
```

## Asynchronous requests
Some requests are processed in an aynchronous way, meaning that sending the requests starts a job in the background. The request returns (with HTTP Code `202 - Accepted`) but the operation itself may not be finished. This requests return a `X-Request-Id` header, which corresponds to the background job and allows querying the status by sending this ID to the `/request` endpoint.
### Watching asynchronous request with the client

When a client method starts an asynchronous request, the response object contains a `watch` property, which is a function which - once called - will start watching the background job your request just started (for example creating a large storage). The Promise that is returned by the `watch`-function will get resolved when the background job is done, or rejected when the job failed in the background.

**Example**

```js
// Creating a new Storage with 1TB Size
client.Storage.create({
  name: "Storage1",
  capacity: 1024,
  location_uuid: "39a7d783-3873-4b2f-915b-4c86c28344e5",
}).then(function (_result) {
  console.log(
    "Storage with UUID: " + _result.result.object_uuid + " is provisioning..."
  );

  // Watching the Storage until it is ready to work with
  _result.watch().then(function () {
    console.log("Storage is ready to use!");
  })
  .catch(e => {
    console.error('Provisioning the storage failed', e));
  });
});
```

You can also directly query a job status with a request-ID (`X-Request-Id` header) by using
```js
client.watchRequest( "[x-request-uuid]" ).then(function () {
  console.log("Storage is ready to use!");
})
.catch(e => {
  console.error('Provisioning the storage failed', e));
});
```


## Global error handling

While you can handle errors per request by handling rejected promises or checking the `success` property of the result in callbacks, you can also set a global error handler for the API.

To do that you register a handler function with the `addLogger` method of the API client. You can also register more handlers by multiple calling `addLogger`. All your error handlers will get executed on each error.

**Example**

```js
const client = new gridscale.Client(API - Token, User - UUID);

client.addLogger((error) => {
  // error object described below
  console.error("API ERROR OCCURED", error.id, error.result);
});
```



