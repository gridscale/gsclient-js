[![npm version](https://badge.fury.io/js/%40gridscale%2Fapi.svg)](https://badge.fury.io/js/%40gridscale%2Fapi)

# Welcome to the gridscale API wrapper

This is our JavaScript Library. We developed this package for our [Expert Panel](https://my.gridscale.io/Expert) and want to share it with you.

[Demo](https://gridscale.github.io/gs_api_node/example/index.html)

For details to all API endpoints and their methods, you should refer to the **official API documentation** here - https://gridscale.io/en/api-documentation/index.html

## Getting Started

### Installation

To install the Package, just type the following command

```js
npm install @gridscale/api --save
```

### Usage

To work with the gridscale API you need an **API-Token** and **User-UUID** - you can create and find it in the API Section of the gridscale Interface (https://my.gridscale.io/Expert/APIKey).

```js
var gridscale = require("@gridscale/api").gridscale;
var client = new gridscale.Client(API - Token, User - UUID);
```

you can also use ECMAScript 6 Syntax

```js
import { gridscale } from "@gridscale/api";
var client = new gridscale.Client(API - Token, User - UUID);
```

#### Options

You can set global options, which apply on every object type when creating the client. The third parameter of the constructor can be used for options

**Example**

```js
var client = new gridscale.Client(API - Token, User - UUID, {
  limit: 25, // Default page-size for list response
  watchdelay: 100, // Delay between the single requests when watching a job (RequestID)
});
```

You can also set the options only for specific object types by using the `setDefaults` function for an object. This will override the global settings

**Example**

```js
var requestoptions = {
    page  : 0,    // Index of Page
    limit : 25,   // Number of Objects per page
    offset: 0,    // Offset from start,

    sort  : [-name,+object_uuid], // Sort by fileds

    fields : [name,object_uuid,...], // Fields that should get included into the Response

    filter : [name='name',capacity<=30] //  Only return data that matches the filter
}

client.Server.setDefaults( requestoptions );
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

##### Available options

| option            | type   |                  default | description                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ------ | -----------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| page              | number |                        0 | Page for pagination, starting with 0 (only available when using `limit` option)                                                                                                                                                                                                                                                                                         |
| limit             | number |                       25 | Maximum items per page (pagination)                                                                                                                                                                                                                                                                                                                                     |
| offset            | number |                        0 | For pagination, alternative to `page` (only valid together with `limit`)                                                                                                                                                                                                                                                                                                |
| sort              | string |                        - | Order the items in the response by a specific field (if not set, response is ordered by best effort, in most cased by `name` field)                                                                                                                                                                                                                                     |
| fields            | array  |                        - | Only include specific fields in the response. The available fields are dependent on the object type. If empty, all fields were included in the response                                                                                                                                                                                                                 |
| filter            | array  |                        - | Filter the response by the values of a specific field. Example "memory>16". See _available filter operators_ below                                                                                                                                                                                                                                                      |
| watchdelay        | number |                       52 | The interval for which the status of not-finished requests should be polled. In milliseconds (see _Watching a job_ below)                                                                                                                                                                                                                                               |
| endpoint          | string | https://api.gridscale.io | The endpoint where the gridscale API is reachable. You should not have to change this                                                                                                                                                                                                                                                                                   |
| endpointOverrides | object |                       {} | Override the `endpoint` for specific API paths, for example if you use a mocked API for some API URLs. The object key is the path for which the endpoint should be overridden, the value is the endpoint to use. Path (the object key) is interpreted as regex when it starts and end with a slash. Example: `{ '/^objects\/storage/': 'http://myMockedBackend:8080' }` |

##### Available filter operators:

Here you find an overview of the filter operators available when using the `filter` option.

"=" String or value comparison: exact match  
"<>" String or value comparison: does not match  
"<" Value less than  
">" Value greater than  
"<=" Value less or equal  
">=" Value greater or equal

#### Callback Functions and Promises

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

##### Result object

| property    | type                                                                  | description                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| success     | boolean                                                               | Indicates if the request was successful. Used for callback style, promise will get rejected on failure.                                                                                                                                                                                                                                                                                                            |
| result      | object                                                                | The response from the API. This will include a `_meta` and a `_links` property when using pagination. On failure result is always `null`                                                                                                                                                                                                                                                                           |
| response    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | The raw response from the Javascript fetch(), including headers.                                                                                                                                                                                                                                                                                                                                                   |
| links       | object                                                                | An object which properties for fetching further results when using pagination. Only available on `list()` response. Each property (first, last, next, prev, self)of this object contains a callable function for fetching further results, returning a Promise and accepting a callback function as only parameter. Example: `result.links.next().then((_res) => { /*/* do stuff with results for next page /* })` |
| watch       | function                                                              | Only available for PATCH, POST or DELETE when a not immediately finished request is made. This function returns a promise, which is resolved when the job, triggered by a request is really finished (e.g. a server or a storage is ready provisioned). For details see _Watching a request_ below                                                                                                                 |
| requestInit | RequestInit                                                           | Init object of the request, containing all the options for the failed request                                                                                                                                                                                                                                                                                                                                      |
| id          | string                                                                | Only available on failure. Contains the unique error id                                                                                                                                                                                                                                                                                                                                                            |

##### Watching a request

The `watch`-function returned in response object will start watching the job your request just started (for example creating a large storage). The Promise that is returned by the `watch`-function will get resolved when the storage is ready to work with.

**Example**

```js
// Creating a new Storage with 1TB Size
client.Storage.create({
  name: "Storage1",
  capacity: 1024,
  location_uuid: "39a7d783-3873-4b2f-915b-4c86c28344e5",
}).then(function (_result) {
  console.log(
    "Storage with UUID: " + _result.result.object_uuid + " is created"
  );

  // Watching the Storage until it is ready to work with
  _result.watch().then(function () {
    console.log("Storage is ready to use!");
  });
});
```

## Global error handling

While you can handle errors per request by handling rejected promises or checking the `success` property of the result in callbacks, you can also set a global error handler for the API.

To do that you register a handler function with the `addLogger` method of the API client. You can also register more handlers by multiple calling `addLogger`. All your error handlers will get executed on each error.

**Example**

```js
var client = new gridscale.Client(API - Token, User - UUID);

client.addLogger((error) => {
  // error object described below
  console.error("API ERROR OCCURED", error.id, error.result);
});
```

### error object

| property    | type                                                                  | description                                                                   |
| ----------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| result      | object                                                                | the result object for the request, described above                            |
| response    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | Raw response object of the Javascript fetch()                                 |
| id          | string                                                                | Unique error id                                                               |
| requestInit | RequestInit                                                           | Init object of the request, containing all the options for the failed request |

## All Object Types

Here you find a list of all available object types. We will add some more soon to make your life easier!
**Note:** This is only a dump of available types. Please find a detailed API Documentation here: https://gridscale.io/en/api-documentation/index.html

### Server

client.Server.list( [ requestoptions , callback ] )  
client.Server.get( uuid [, callback ] )  
client.Server.remove( uuid [, callback ] )  
client.Server.create( attribute [, callback ] )  
client.Server.patch( uuid , attribute [, callback ] )  
client.Server.power( uuid , powerstate [, callback ] )  
client.Server.shutdown( uuid [, callback ] )  
client.Server.events( uuid [, requestoptions , callback ] )  
client.Server.ips( uuid , [, requestoptions , callback ] )  
client.Server.ip( uuid , ip_uuid [, callback ] )  
client.Server.addIp( uuid , ip_uuid [, callback ] )  
client.Server.removeIp( uuid , ip_uuid [, callback ] )  
client.Server.metrics( uuid [, requestoptions , callback ] )  
client.Server.networks( uuid , [, requestoptions , callback ] )  
client.Server.network( uuid , network_uuid [, callback ] )  
client.Server.patchNetwork( uuid , network_uuid, attribute [, callback ] )  
client.Server.addNetwork( uuid , network_uuid [, callback ] )  
client.Server.removeNetwork( uuid , network_uuid [, callback ] )  
client.Server.storages( uuid , [, requestoptions , callback ] )  
client.Server.storage( uuid , storage_uuid [, callback ] )  
client.Server.patchStorage( uuid , storage_uuid, attribute [, callback ] )  
client.Server.addStorage( uuid , storage_uuid [, callback ] )  
client.Server.removeStorage( uuid , storage_uuid [, callback ] )  
client.Server.isoimages( uuid , [, requestoptions , callback ] )  
client.Server.isoimage( uuid , isoimage_uuid [, callback ] )  
client.Server.patchIsoimage( uuid , isoimage_uuid, attribute [, callback ] )  
client.Server.addIsoimage( uuid , isoimage_uuid [, callback ] )  
client.Server.removeIsoimage( uuid , isoimage_uuid [, callback ] )

### Storage

client.Storage.list( [ requestoptions , callback ] )  
client.Storage.get( uuid [, callback ] )  
client.Storage.remove( uuid [, callback ] )  
client.Storage.create( attribute [, callback ] )  
client.Storage.patch( uuid , attribute [, callback ] )  
client.Storage.clone( uuid [, callback ] )
client.Storage.events( uuid [, requestoptions , callback ] )
client.Storage.snapshots( uuid , [, requestoptions , callback ] )  
client.Storage.snapshot( uuid , snapshot_uuid [, callback ] )  
client.Storage.patchSnapshot( uuid , snapshot_uuid, attribute [, callback ] )  
client.Storage.rollbackSnapshot( uuid , snapshot_uuid [, callback ] )
client.Storage.exportSnapshot( uuid , snapshot_uuid, \_data [, callback ] )
client.Storage.createSnapshot( uuid , snapshot_uuid [, callback ] )  
client.Storage.removeSnapshot( uuid , snapshot_uuid [, callback ] )
client.Storage.snapshotSchedulers( uuid [, requestoptions , callback ] )  
client.Storage.snapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )  
client.Storage.patchSnapshotScheduler( uuid , snapshot_scheduler_uuid, attribute [, callback ] )  
client.Storage.createSnapshotScheduler( uuid , snapshot_scheduler_options [, callback ] )  
client.Storage.removeSnapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )
client.Storage.backupSchedules( uuid [,requestoptions [, callback ]])
client.Storage.backupScheduler( uuid , backup_schedule_uuid [, callback ])
client.Storage.createBackupScheduler( uuid , backup_schedule_options [, callback ])
client.Storage.patchBackupSchedule( uuid , backup_schedule_uuid, backup_schedule_options [, callback ])
client.Storage.removeStorageBackupSchedule( uuid , backup_schedule_uuid [, callback ])
client.Storage.backups( uuid [, callback ])
client.Storage.deleteStorageBackup( uuid , backup_uuid [, callback ])
client.Storage.createFromBackup( name, backup_uuid [, callback ])
rollbackStorageBackup(uuid, backup_uuid, attributes[, callback])

### Network

client.Network.list( [ requestoptions , callback ] )  
client.Network.get( uuid [, callback ] )  
client.Network.remove( uuid [, callback ] )  
client.Network.create( attribute [, callback ] )  
client.Network.patch( uuid , attribute [, callback ] )  
client.Network.events( uuid [, requestoptions , callback ] )

### Location

client.Location.list( [ requestoptions , callback ] )  
client.Location.get( uuid [, callback ] )  
client.Location.getLocationIPs( uuid [, callback ] )  
client.Location.getLocationISOImages( uuid [, callback ] )  
client.Location.getLocationNetworks( uuid [, callback ] )  
client.Location.getLocationServers( uuid [, callback ] )  
client.Location.getLocationSnapshots( uuid [, callback ] )  
client.Location.getLocationStorages( uuid [, callback ] )  
client.Location.getLocationTemplates( uuid [, callback ] )

### IP

client.IP.list( [ callback ] )  
client.IP.get( uuid [, callback ] )  
client.IP.remove( uuid [, callback ] )  
client.IP.create( attribute [, callback ] )  
client.IP.patch( uuid , attribute [, callback ] )  
client.IP.events( uuid [requestoptions , callback ] )

### ISOImage

client.ISOImage.list( [ requestoptions , callback ] )  
client.ISOImage.get( uuid [, callback ] )  
client.ISOImage.remove( uuid [, callback ] )  
client.ISOImage.create( attribute [, callback ] )  
client.ISOImage.patch( uuid , attribute [, callback ] )  
client.ISOImage.events( uuid [, requestoptions , callback ] )

### Template

client.Template.list( [ requestoptions , callback ] )  
client.Template.get( uuid [, callback ] )  
client.Template.remove( uuid [, callback ] )  
client.Template.create( attribute [, callback ] )  
client.Template.patch( uuid , attribute [, callback ] )  
client.Template.events( uuid [, requestoptions , callback ] )

### SSHKey

client.SSHKey.list( [ requestoptions , callback ] )  
client.SSHKey.get( uuid [, callback ] )  
client.SSHKey.remove( uuid [, callback ] )  
client.SSHKey.create( attribute [, callback ] )  
client.SSHKey.patch( uuid , attribute [, callback ] )  
client.SSHKey.events( uuid [, requestoptions , callback ] )

### Firewall

client.Firewall.list( [ requestoptions , callback ] )  
client.Firewall.get( uuid [, callback ] )  
client.Firewall.remove( uuid [, callback ] )  
client.Firewall.create( attribute [, callback ] )  
client.Firewall.patch( uuid , attribute [, callback ] )  
client.Firewall.events( uuid [, requestoptions , callback ] )

### Loadbalancer

client.Loadbalancer.list( [ requestoptions , callback ] )  
client.Loadbalancer.get( uuid [, callback ] )  
client.Loadbalancer.remove( uuid [, callback ] )  
client.Loadbalancer.create( attribute [, callback ] )  
client.Loadbalancer.patch( uuid , attribute [, callback ] )  
client.Loadbalancer.events( uuid [, requestoptions , callback ] )

### ObjectStorage

client.ObjectStorage.accessKeys( [ callback ] )  
client.ObjectStorage.accessKey( access_key [, callback ] )  
client.ObjectStorage.createAccessKey([ callback ] )  
client.ObjectStorage.removeAccessKey( access [, callback ] )

### Paas

client.PAAS.serviceTemplates.get( UUID [, callback ] )
client.PAAS.serviceTemplates.list( [ requestoptions, callback ] )
client.PAAS.securityZones.list( [ requestoptions, callback ] )
client.PAAS.securityZones.get( UUID [, callback ] )
client.PAAS.securityZones.events( UUID [, callback ] )
client.PAAS.securityZones.remove( UUID [, callback ] )
client.PAAS.securityZones.create( data [, callback ] )
client.PAAS.securityZones.patch( UUID, data [, callback ] )
client.PAAS.services.list( [ requestoptions, callback ] )
client.PAAS.services.get( UUID [, callback ] )
client.PAAS.services.events( UUID [, callback ] )
client.PAAS.services.listMetrics( UUID [, callback ] )
client.PAAS.services.remove( UUID [, callback ] )
client.PAAS.services.create( data [, callback ] )
client.PAAS.services.patch( UUID, data [, callback ] )

### MarketplaceApplication

client.MarketplaceApplication.list( [ requestoptions , callback ] )  
client.MarketplaceApplication.get( uuid [, callback ] )  
client.MarketplaceApplication.remove( uuid [, callback ] )  
client.MarketplaceApplication.create( attribute [, callback ] )  
client.MarketplaceApplication.patch( uuid , attribute [, callback ] )  
client.MarketplaceApplication.events( uuid [, requestoptions , callback ] )

### Label

client.Label.list( [ requestoptions , callback ] )  
client.Label.get( uuid [, callback ] )

```
(!) Label create() and remove() operations were deleted with version 0.3.0 on 6th April 2020
```

### Price

client.Price.list( [ callback ] )

### Events

client.Events.list( [ callback ] )

### Deleted

client.Deleted.servers( [ requestoptions , callback ] )  
client.Deleted.storages( [ requestoptions , callback ] )  
client.Deleted.networks( [ requestoptions , callback ] )  
client.Deleted.ips( [ requestoptions , callback ] )  
client.Deleted.isoimages( [ requestoptions , callback ] )  
client.Deleted.snapshots( [ requestoptions , callback ] )  
client.Deleted.templates( [ requestoptions , callback ] )

### Helper Lobs

client.watchRequest( x-request-uuid )

## Making changes to the API client

To compile the typescript code to javascript please run `gulp` command.
