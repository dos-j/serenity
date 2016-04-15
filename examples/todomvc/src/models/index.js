import serenity from 'serenitydi';

const model = {
  items: ['Hello, World']
};

serenity.registerState(() => {
  return model;
}, 'TodoModel', []);


serenity.register((model) => {

  return function(item) {
    model.items = [
      ...model.items,
      item
    ];
  }
}, 'SampleAction', ['TodoModel']);

serenity.register((model) => {

  return function(idx) {
    model.items = model.items.filter((item, index) => index !== idx);
  }
}, 'DeleteTodoItemAction', ['TodoModel']);
