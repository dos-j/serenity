import * as injector from './di/injector';

export ReactInjector from './ReactInjector';
export default injector;

if(window) {
  window.serenity = injector;
}
