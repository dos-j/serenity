import { register, runService, registerState, fetch, fetchAll, generateDependencyTree } from './di/injector';

const injector = {
  register,
  registerState,
  runService,
  fetch,
  fetchAll,
  generateDependencyTree
};

export default injector;

if (typeof window === 'object') {
  window.serenity = injector;
}
