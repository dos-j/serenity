import serenity from 'serenitydi';


const model = {
  items: ['Hello, World']
};

serenity.registerState(() => {
  return model;
}, 'TodoModel', []);


serenity.register((model) => {
  return function(item) {
    const currentData = model.data;
    currentData.items.push(item);
    model.set(currentData);
  }

}, 'SampleAction', ['TodoModel']);
