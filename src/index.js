import injector from './di/injector';

const singletonInjector = new injector();
export default singletonInjector;

if(window) {
  window.serenity = singletonInjector;
}
