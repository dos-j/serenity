import { register, runService, registerState, fetch } from './di/injector';

const injector = {
  register,
  registerState,
  runService,
  fetch
};

export default injector;

if (typeof window === 'object') {
  window.serenity = injector;
}
