
const subscriptions = new WeakMap();

export default function observe(dataObject) {

  const observable = new Proxy(dataObject, {
    get(target, key) {
      return target[key];
    },

    set(target, key, value) {
      target[key] = value;

      subscriptions.get(observable).forEach(func => func(observable));
      return true;
    }
  });

  subscriptions.set(observable, []);
  observable.subscribe = subscribe.bind(observable, observable);

  return observable;
}

export function subscribe(observable, func) {

  subscriptions.get(observable).push(func)
}
