
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
    
    const injectables = this.services[name].dependencies.map(injectName => this.services[injectName].service());
    this.services[name].service(...injectables);
  };

}
