
export default function(dataObject) {
  return {
    
    subscribers: [],

    subscribe(callback) {
      this.subscribers.push(callback);
    },

    set(key, value) {
      if (this.data.hasOwnProperty(key) && this.data[key] !== value) {
        this.data = {
          ...this.data,
          key: value
        };
        
        this.dispatch(); 
      }
    },

    dispatch(data) {
      this.subscribers.forEach(subscriber => subscriber(this.data));
    },

    data: {
      ...dataObject
    }
  };
}
