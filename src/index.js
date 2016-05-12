import * as injector from './di/injector';

export default injector;

if (typeof window === 'object') {
  window.serenity = injector;
}
