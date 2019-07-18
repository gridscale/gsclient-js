# Welcome to the gridscale API wrapper #

Here is our JavaScript Libary. We have developed this Package for our own Expert Panel and want to share it with you.  

**This document is still under development and is constantly being expanded and optimized**

[Demo](https://gridscale.github.io/gs_api_node/example/index.html)


## Getting Started

You can get started with the API here - https://gridscale.io/en/api-documentation/index.html

### Install

To install the Package, just type the following command
```js
npm install @gridscale/api --save
```
### Usage
To work with the gridscale API you need an **API-Token** and **User-UUID** - you can create and find it in the API Section of the gridscale Interface (https://my.gridscale.io).
 ```js
var gridscale = require('@gridscale/api').gridscale;
var client = new gridscale.Client(TOKEN,User-UUID);
```

you can also use ECMAScript 6 Syntax
```js
import { gridscale } from '@gridscale/api';
```



#### Options
You can set new default settings for every Object type when creating the client. The third parameter of the constructor can be used for options

```js
var client = new gridscale.Client(TOKEN,User-UUID, {
        limit:25, // Default Page-Size for List Response
        watchdelay: 100  // Delay between the single Requests when watching a Job(RequestID)
    });
```

For all single Object Types you can adjust different default values for pagination, filtering, sorting and what fields should get included into list requests.  
You can set the options by calling the *setDefaults* function for an object

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
You can also use the options in a single request to filter your objects    

```js
client.Server.list({
    page: 0,
    limit : 10,        
    sort: "name",         
    fields: ["name","object_uuid"],        
    filter: ["memory>16"]
}).then(_callback);
```
In this example the result will be the first 10 servers with more then 16GB of memory. Sorted by name and only returning the `name` and the `object_uuid`.



##### Available Filter Options:  
Here you find an overview of the filter options you have when using the filter.

"=" String or value comparison: exact match  
"<>" String or value comparison: does not match  
"<" Value less than  
">" Value greater than  
"<=" Value less or equal  
">=" Value greater or equal  



#### Callback Functions and Promises
All requests and actions for the objects return a `Promise`. You are also free to use a callback style for each action as listed below. Both Promise and Callback use the same result object that gets passed to the function
```js
client.Server.list().then(function( result ){
    result.success;     // Boolean Value. False = there was an Error
    result.result;      // JS Object of Repsonse. If you use the Pagination ther will be a _meta and a _links Object included
    result.response;    // Full Repsonse Object including Headers
    result.links;       // Links for current Request. You can directly call them with an optional callback. (first,last,next,prev,self)
    result.watch;       // Function that returns a Promise for the current Job.
});
```
The `links` are only given in **list** responses.  
The `watch` function is only available on PATCH, POST or DELETE Calls.

##### Watching a Job
The `watch`-function returned in each response object will start watching the job your request just started (for example creating a large storage). The Promise that is returned by the `watch`-function will get resolved when the storage is ready to work with.
```js
// Creating a new Storage with 1TB Size
client.Storage.create({name:"Storage1",capacity:1024,location_uuid:"39a7d783-3873-4b2f-915b-4c86c28344e5"}).then(function(_result){
    console.log('Storage with UUID: '+ _result.result.object_uuid +' is created');

    // Watching the Storage until it is ready to work with
    _result.watch().then(function(){
        console.log('Storage is ready to use!');
    });

});
```



## All Ressources and Functions  
Here you find a list of all available Functions. We will add some more soon to make your life easier!
**Note:** This is only a dump of available functions. Please find a detailed API Documentation here: https://gridscale.io/en/api-documentation/index.html

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
client.Server.ip( uuid , ip_uuid  [, callback ] )  
client.Server.addIp( uuid , ip_uuid  [, callback ] )  
client.Server.removeIp( uuid , ip_uuid  [, callback ] )    
client.Server.metrics( uuid [, requestoptions , callback ] )  
client.Server.networks( uuid , [, requestoptions , callback ] )  
client.Server.network( uuid , network_uuid [, callback ] )  
client.Server.patchNetwork( uuid , network_uuid, attribute [, callback ] )  
client.Server.addNetwork( uuid , network_uuid [, callback ] )  
client.Server.removeNetwork( uuid , network_uuid [, callback ] )  
client.Server.storages( uuid , [, requestoptions , callback ] )  
client.Server.storage( uuid , storage_uuid  [, callback ] )  
client.Server.patchStorage( uuid , storage_uuid, attribute  [, callback ] )  
client.Server.addStorage( uuid , storage_uuid [, callback ] )  
client.Server.removeStorage( uuid , storage_uuid [, callback ] )  
client.Server.isoimages( uuid , [, requestoptions , callback ] )  
client.Server.isoimage( uuid , isoimage_uuid  [, callback ] )  
client.Server.patchIsoimage( uuid , isoimage_uuid, attribute  [, callback ] )  
client.Server.addIsoimage( uuid , isoimage_uuid [, callback ] )  
client.Server.removeIsoimage( uuid , isoimage_uuid [, callback ] )

### Storage
client.Storage.list( [ requestoptions , callback ] )  
client.Storage.get( uuid [, callback ] )  
client.Storage.remove( uuid [, callback ] )  
client.Storage.create( attribute [, callback ] )  
client.Storage.patch( uuid , attribute [, callback ] )   
client.Storage.events( uuid [, requestoptions , callback ] )
client.Storage.snapshots( uuid , [, requestoptions , callback ] )  
client.Storage.snapshot( uuid , snapshot_uuid  [, callback ] )  
client.Storage.patchSnapshot( uuid , snapshot_uuid, attribute  [, callback ] )  
client.Storage.rollbackSnapshot( uuid , snapshot_uuid [, callback ] )
client.Storage.exportSnapshot( uuid , snapshot_uuid, _data [, callback ] )
client.Storage.createSnapshot( uuid , snapshot_uuid [, callback ] )  
client.Storage.removeSnapshot( uuid , snapshot_uuid [, callback ] )
client.Storage.snapshotSchedulers( uuid [, requestoptions , callback ] )  
client.Storage.snapshotScheduler( uuid , snapshot_scheduler_uuid  [, callback ] )  
client.Storage.patchSnapshotScheduler( uuid , snapshot_scheduler_uuid, attribute  [, callback ] )  
client.Storage.createSnapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )  
client.Storage.removeSnapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )

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
client.ObjectStorage.buckets( [ callback ] )   
client.ObjectStorage.bucket( bucket_name [ , callback ] )

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

### Marketplace
client.Marketplace.list( [ requestoptions , callback ] )  
client.Marketplace.get( uuid [, callback ] )  
client.Marketplace.remove( uuid [, callback ] )  
client.Marketplace.create( attribute [, callback ] )  
client.Marketplace.patch( uuid , attribute [, callback ] )   
client.Marketplace.events( uuid [, requestoptions , callback ] )

### Label
client.Label.list( [ requestoptions , callback ] )  
client.Label.get( uuid [, callback ] )  
client.Label.remove( uuid [, callback ] )  
client.Label.create( attribute [, callback ] )  



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
