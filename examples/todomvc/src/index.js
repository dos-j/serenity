import serenity from 'serenitydi';
console.log(serenity);
const model = {
  items: [],
  selectedItem: null
}; 

serenity.register(function() {
  console.log('registering model');
  return model;
}, 'TodoModel', []);
