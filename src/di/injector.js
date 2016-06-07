import dataWrapper from './dataWrapper';

export const services = {};

export function register(name, dependencies, service) {

  if (typeof service !== 'function') {
    throw `Tried to register service '${name}' which is not a function`;
  }

  if (services.hasOwnProperty(name)) {
    throw `Service with name '${name}' already registered`;
  }

  services[name] = {
    service,
    dependencies
  };
}

/**
 * invoke a service by name
 *
 * @param string
 */
export function runService(serviceName) {
  const injectables = services[serviceName].dependencies.map(
    injectName => runService(injectName)
  );

  return services[serviceName].service(...injectables);
}

export function fetch(serviceName) {
  return runService(serviceName);
}

/**
 * @param string - name
 * @param function - service which returns state object
 */
export function registerState(name, service) {
  const dataInstance = dataWrapper(service());
  register(name, [], () => dataInstance);
}

/**
 * @param array - dependencies
 */ 
export function fetchAll(dependencies) {
  return dependencies.map(serviceName => runService(serviceName));
}

