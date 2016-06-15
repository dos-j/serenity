
const subscriptions = new WeakMap();

export default function observe(dataObject) {

  const observable = {
    setState(newState) {
      if (typeof newState !== typeof dataObject) {
        throw new Error(`new state must be of type ${typeof dataObject}`);
      }

      Object.keys(newState).forEach(key => this[key] = newState[key]);
      notify(observable, this);
    },
    ...dataObject
  };

  subscriptions.set(observable, []);
  observable.subscribe = subscribe.bind(observable, observable);
  observable.setState = observable.setState.bind(observable);

  return observable;
}

export function subscribe(observable, func) {

  if (typeof func !== 'function') {
    throw new Error(`subscriptions must be of type function, Got ${typeof func}`);
  }

  subscriptions.get(observable).push(func);
}

export function notify(observable) {
  subscriptions.get(observable).forEach(observer => observer(observable));
}
