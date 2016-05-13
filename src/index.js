import { register, registerState, fetch } from './di/injector';

const injector = {
  register,
  registerState,
  fetch
};
export default injector;

if (typeof window === 'object') {
  window.serenity = injector;
}
