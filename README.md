# Welcome to the gridscale API wrapper #

General Description how this all works


## Getting Started

install

auth

default options

examples

jump to




## Options
For all List request you can assign different request options for Pagination and Filtering:

    requestoptions = {
        "page"  : 0,    // Index of Page
        "limit" : 25,   // Number of Objects per page 
        "offset": 0     // Offset to start,
        
        "sort"  : [-name,+object_uuid], // Sort by fileds
        
        "fields" : [name,object_uuid,...], // Fields that should get included into the Response
        
        "filter" : [name=toller_name,capacity<=30,label=adsf]
    }

### Availible Filter Options: 
"=" String or Value comparison: exact match  
"<>" String or Value comparison: does not match  
"<" Value less than  
">" Value greater than  
"<=" Value less or equal  
">=" Value greater or equal  


## Function
All Functions will return a Promise

### Server
client.Server.list( [ requestoptions , callback ] )  
client.Server.get( uuid [, callback ] )  
client.Server.remove( uuid [, callback ] )  
client.Server.create( attribute [, callback ] )  
client.Server.patch( uuid , attribute [, callback ] ) 
client.Server.power( uuid , powerstate [, callback ] )   
client.Server.events( uuid [, requestoptions , callback ] )  
client.Server.ips( uuid , [, requestoptions , callback ] )  
client.Server.ip( uuid , ip_uuid  [, callback ] )  
client.Server.relateIp( uuid , ip_uuid  [, callback ] )  
client.Server.detachIp( uuid , ip_uuid  [, callback ] )    
client.Server.networks( uuid , [, requestoptions , callback ] )  
client.Server.network( uuid , network_uuid [, callback ] )  
client.Server.patchNetwork( uuid , network_uuid, attribute [, callback ] )  
client.Server.relateNetwork( uuid , network_uuid [, callback ] )  
client.Server.detachNetwork( uuid , network_uuid [, callback ] )  
client.Server.storages( uuid , [, requestoptions , callback ] )  
client.Server.storage( uuid , storage_uuid  [, callback ] )  
client.Server.patchStorage( uuid , storage_uuid, attribute  [, callback ] )  
client.Server.relateStorage( uuid , storage_uuid [, callback ] )  
client.Server.detachStorage( uuid , storage_uuid [, callback ] )  
client.Server.isoimages( uuid , [, requestoptions , callback ] )  
client.Server.isoimage( uuid , isoimage_uuid  [, callback ] )  
client.Server.patchIsoimage( uuid , isoimage_uuid, attribute  [, callback ] )  
client.Server.relateIsoimage( uuid , isoimage_uuid [, callback ] )  
client.Server.detachIsoimage( uuid , isoimage_uuid [, callback ] )

## Storage
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
client.Storage.relateSnapshot( uuid , snapshot_uuid [, callback ] )  
client.Storage.detachSnapshot( uuid , snapshot_uuid [, callback ] ) 
client.Storage.snapshotSchedulers( uuid , [, requestoptions , callback ] )  
client.Storage.snapshotScheduler( uuid , snapshot_scheduler_uuid  [, callback ] )  
client.Storage.patchSnapshotScheduler( uuid , snapshot_scheduler_uuid, attribute  [, callback ] )  
client.Storage.relateSnapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )  
client.Storage.detachSnapshotScheduler( uuid , snapshot_scheduler_uuid [, callback ] )

## Network
client.Network.list( [ requestoptions , callback ] )  
client.Network.get( uuid [, callback ] )  
client.Network.remove( uuid [, callback ] )  
client.Network.create( attribute [, callback ] )  
client.Network.patch( uuid , attribute [, callback ] )   
client.Network.events( uuid [, requestoptions , callback ] ) 

## Location
client.Location.list( [ requestoptions , callback ] )  
client.Location.get( uuid [, callback ] )  

## IP
client.IP.list( [ requestoptions , callback ] )  
client.IP.get( uuid [, callback ] )  
client.IP.remove( uuid [, callback ] )  
client.IP.create( attribute [, callback ] )  
client.IP.patch( uuid , attribute [, callback ] )   
client.IP.events( uuid [, requestoptions , callback ] ) 

## ISOImage
client.ISOImage.list( [ requestoptions , callback ] )  
client.ISOImage.get( uuid [, callback ] )  
client.ISOImage.remove( uuid [, callback ] )  
client.ISOImage.create( attribute [, callback ] )  
client.IsoImage.patch( uuid , attribute [, callback ] )   
client.ISOImage.events( uuid [, requestoptions , callback ] ) 

## Template
client.Template.list( [ requestoptions , callback ] )  
client.Template.get( uuid [, callback ] )  
client.Template.remove( uuid [, callback ] )  
client.Template.create( attribute [, callback ] )  
client.Template.patch( uuid , attribute [, callback ] )   
client.Template.events( uuid [, requestoptions , callback ] ) 

## SSHKey
client.SSHKey.list( [ requestoptions , callback ] )  
client.SSHKey.get( uuid [, callback ] )  
client.SSHKey.remove( uuid [, callback ] )  
client.SSHKey.create( attribute [, callback ] )  
client.SSHKey.patch( uuid , attribute [, callback ] )   
client.SSHKey.events( uuid [, requestoptions , callback ] ) 

## ObjectStorage
client.ObjectStorage.accessKeys( [ requestoptions , callback ] )  
client.ObjectStorage.accessKey( access_key [, callback ] )  
client.ObjectStorage.createAccessKey([ callback ] )  
client.ObjectStorage.removeAccessKey( access [, callback ] )  
client.ObjectStorage.buckets( [ requestoptions , callback ] )   
client.ObjectStorage.bucket( bucket_name [ , callback ] ) 


## Examples

*List Server*

    // Request Objects
    client.Server.list().then(function( result:Object ){
        result.sucess      = Boolean Value. False = there was an Error
        result.result      = JS Object of Repsonse
        result.response    = Full Repsonse 
        result.links       = Links for current Request. You can directly call them with an optional callback. (first,last,next,prev,self)
    });
      
    // Limit Result Object
    client.Server.list({
        page: x, // Index of Page 
        page-size|limit : x, // Elements per Page
        offset: x, // Number of Items that will be Skipped,
        
        sort: ["xxx","xxx"], // one or multiple sort rules example: -name,memory,
        
        fields: ["xx"...] // filds that shoud get included into call
        
        filter: ["capacity>15","label<>adsf"]
    }).then(_callback);
      
    // Set Defaults
    client.Server.defaults({
        page-size|limit : x, // Elements per Page
    
        sort: ["xxx","xxx"], // one or multiple sort rules example: -name,memory,
        
        fields: ["xx"...] // filds that shoud get included into call
            
        filter: ["capacity>15","label<>adsf"]
    });



