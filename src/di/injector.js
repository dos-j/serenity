import dataWrapper from './dataWrapper';

export const services = {};

export function register(service, name, dependencies) {
  if (typeof service !== 'function') {
    throw 'Tried to register a service which is not a function';
  }

  if (services.hasOwnProperty(name)) {
    throw `Service with name ${name} already registered`;
  }

  services[name] = {
    service,
    dependencies
  };

  runService(name);  
}

export function runService(serviceName) {
  const injectables = services[serviceName].dependencies.map(
    injectName => runService(injectName)
  );

  return services[serviceName].service(...injectables);
}

export function registerState(service, name) {
  const dataInstance = dataWrapper(service());
  register(() => dataInstance, name, []);
}

export function fetch(dependencies) {
  return dependencies.map(serviceName => runService(serviceName));
}

