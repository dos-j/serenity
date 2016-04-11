
export default function(dataObject) {
  return {
    
    subscribers: [],

    subscribe(callback) {
      this.subscribers.push(callback);
    },

    set(state) {
      this.data = {
        ...state
      };
      this.dispatch(this.data);
    },

    dispatch(data) {
      this.subscribers.forEach(subscriber => subscriber(this.data));
    },

    data: {
      ...dataObject
    }
  };
}
