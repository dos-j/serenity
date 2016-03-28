
import serenity from 'serenitydi';

const model = {
  items: [],
  selectedItem: null
}; 

serenity.register(function() {
  return model;
}, 'TodoModel', []);
