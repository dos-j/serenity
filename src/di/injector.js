
export default class Injector {

  constructor() {
    this.services = {};
  }

  register = (service, name, dependencies) => {
    if (typeof service !== 'function') {
      throw `Tried to register a service which is not a function`;
    }

    if (this.services.hasOwnProperty(name)) {
      throw `Service with name ${name} already registered`;
    }

    this.services[name] = {
      service,
      dependencies
    };

    this.runService(name);  
  };

  runService = (serviceName) => {
  
    const injectables = this.services[serviceName].dependencies.map(
      injectName => this.runService(injectName)
    );
  
    return this.services[serviceName].service(...injectables);
  };

  fetch = dependencies => dependencies.map(serviceName => this.runService(serviceName));
  

}
