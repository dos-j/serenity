import dataWrapper from './dataWrapper';

export const services = {};

export function register(name, dependencies, service) {

  if (typeof service !== 'function') {
    throw new Error(`Tried to register service '${name}' which is not a function`);
  }

  if (services.hasOwnProperty(name)) {
    throw new Error(`Service with name '${name}' already registered`);
  }

  services[name] = {
    service,
    dependencies
  };
}

/**
 * invoke a service by name
 *
 * @param {string} serviceName - Name of the service to instantiate
 * @return {any} Service that has been instantiated
 */
export function runService(serviceName) {

  if (!services.hasOwnProperty(serviceName)) {
    throw new Error(`Service with name '${name}' has not been registered`);
  }

  const injectables = services[serviceName].dependencies.map(
    injectName => runService(injectName)
  );

  return services[serviceName].service(...injectables);
}

export function fetch(serviceName) {
  return runService(serviceName);
}

/**
 * @param {string} name - name
 * @param {function} service - service which returns state object
 * @return {undefined}
 */
export function registerState(name, service) {
  const dataInstance = dataWrapper(service());
  register(name, [], () => dataInstance);
}

/**
 * @param {array} dependencies - dependencies
 * @return {array} array of retrieved dependencies
 */
export function fetchAll(dependencies) {
  return dependencies.map(serviceName => runService(serviceName));
}

