import { register, runService, registerState, fetch, fetchAll } from './di/injector';

const injector = {
  register,
  registerState,
  runService,
  fetch,
  fetchAll
};

export default injector;

if (typeof window === 'object') {
  window.serenity = injector;
}
