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

//run the application
const service1 = serenity.fetch('Service1');

service1(); //test will be logged

```

####ES6 Classes

```javascript

import serenity from 'serenitydi';

class Service {
  constructor(service2) {
    this.service2 = service2;
  }

  sayWhateverComesFromService2() {
    console.log(this.service2());
  }
}

serenity.register(
  'Service1',
  [ 'Service2' ],
  (service2) => new Service(service2) 
);

serenity.register(
  'Service2',
  [],
  () => () => 'Hello, World!'
);

const service = serenity.fetch('Service1');

service.sayWhateverComesFromService2(); //logs Hello, World!

```
