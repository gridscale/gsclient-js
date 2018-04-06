# Welcome to the gridscale API wrapper #

Here you find our gridscale js Libary. We developed this Package for our own Expert Panel and want to share it with you.  

**This document is still under development and is constantly being expanded and optimized**


## Getting Started

### Install

To install the Package, just type the following command
```js
npm install @gridscale/api --save
```
### Usage
To work with the gridscale API you need an API-Token and User-UUID you can create and find in the API Section of the gridscale Interface.
 ```js
var gridscale = require('@gridscale/api').gridscale;
var client = new gridscale.Client(TOKEN,User-UUID);
```


#### Options
You can set new Default Settings for every Object type when creating the Client. The third parameter of the Constructor can be used for Options

```js
var client = new gridscale.Client(TOKEN,User-UUID, {
        limit:25, // Default Page-Size for List Response
        watchdelay: 100  // Delay between the single Requests when watching a Job(RequestID)
    });
```

For all single Object Types you can adjust different default Values for Pagination, Filtering, Sorting and what Fields should get included into List requests.  
You can set the Options by calling the *setDefaults* Function for a Object

```js
var requestoptions = {
    page  : 0,    // Index of Page
    limit : 25,   // Number of Objects per page
    offset: 0     // Offset to start,

    sort  : [-name,+object_uuid], // Sort by fileds

    fields : [name,object_uuid,...], // Fields that should get included into the Response

    filter : [name='name',capacity<=30]
}

client.Server.setDefaults( requestoptions );
```
You can also Use the Options in a Single request to Filter you Objects    

```js
client.Server.list({
    page: 0,
    limit : 10,        
    sort: "name",         
    fields: ["name","object_uuid"],        
    filter: ["memory>16"]
}).then(_callback);
```
In this Example the Result will be the first 10 Servers with more then 16GB of Memory. Sorted by name and only returning the Name and the Object_uuid.



##### Availible Filter Options:  
Here you find an overview of the Filter Options you have when using the Filter.

"=" String or Value comparison: exact match  
"<>" String or Value comparison: does not match  
"<" Value less than  
">" Value greater than  
"<=" Value less or equal  
">=" Value greater or equal  



#### Callback Function and Promises
All Requests and Actions for the Objects return a Promise. You are also to use a Callback Style for each Action as Listed below. Both Promise and Callback use the same Result Object that get passed to the Function
```js
client.Server.list().then(function( result ){
    result.success;     // Boolean Value. False = there was an Error
    result.result;      // JS Object of Repsonse. If you use the Pagination ther will be a _meta and a _links Object included
    result.response;    // Full Repsonse Object including Headers
    result.links;       // Links for current Request. You can directly call them with an optional callback. (first,last,next,prev,self)
    result.watch;       // Function that returns a Promise for the current Job.
});
```
The Links are only given in Responses where a List is Returned.  
The watch Function is also only available on PATCH, POST or DELETE Calls. So when you are creating or changing an Object.

##### Watching a Job
The Watch-Function will start watching the Job your request just started. So if you created a large Storage. The Promise that get returns by the Watch-Function will get resolved if the Storage is ready to work with.
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
Here you find a list of all available Functions. We will add some more soon to make you life easier!

#### Server
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
client.IsoImage.patch( uuid , attribute [, callback ] )   
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

### ObjectStorage
client.ObjectStorage.accessKeys( [ callback ] )  
client.ObjectStorage.accessKey( access_key [, callback ] )  
client.ObjectStorage.createAccessKey([ callback ] )  
client.ObjectStorage.removeAccessKey( access [, callback ] )  
client.ObjectStorage.buckets( [ callback ] )   
client.ObjectStorage.bucket( bucket_name [ , callback ] )

### Price
client.Price.list( [ callback ] )  

### Events
client.Events.list( [ callback ] )  

### Cloud Automation Service
client.CAS.tasks.list( [ requestoptions , callback ] )  
client.CAS.tasks.get( uuid [, callback ] )  
client.CAS.tasks.remove( uuid [, callback ] )  
client.CAS.tasks.create( attribute [, callback ] )  
client.CAS.tasks.patch( uuid , attribute [, callback ] )   
client.CAS.tasks.events( uuid [, requestoptions , callback ] )   
client.CAS.events.list( [ requestoptions , callback ] )  
client.CAS.events.get( uuid [, callback ] )  
client.CAS.actions.list( [ requestoptions , callback ] )  
client.CAS.actions.get( uuid [, callback ] )  

### Helper

client.watchRequest( x-request-uuid )
