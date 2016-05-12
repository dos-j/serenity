import * as injector from './di/injector';

export default injector;

if(window) {
  window.serenity = injector;
}
