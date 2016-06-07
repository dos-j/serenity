Serenity Dependency Injection
=====

SerenityDI is an ultra lightweight dependency injection container for Javascript. Inspiration was taken from the angular IoC, however the API is not exactly the same. 

##### Core Differences:
* Serenity is purely a DI engine, it is not trying to be anything else
* In Serenity, YOU decide how providers are implemented (more details below)

Installation 
-----

Serenity is installable by NPM. - ```npm install serenitydi```

[Link To NPM](https://www.npmjs.com/package/serenitydi)

Basic Usage 
-----

####Functional
```javascript

import serenity from 'serenitydi';

serenity.register(
  'Service2',
  [],
  () => () => { //shorthand syntax using arrow functions
    console.log('test');
  }
);

serenity.register(
  'Service1',
  [ 'Service2' ], //list of dependencies to inject
  (service2) => {
    //this function gets injected with the dependency list
    return function() {
      //This function gets injected as Service1 elsewhere and has access to Service2 on closure scope
      service2(); //will console.log 'test'
    }
  }
);

```
