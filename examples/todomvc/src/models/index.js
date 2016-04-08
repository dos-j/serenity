import serenity from 'serenitydi';

serenity.register(function() {
  return function() {
    console.log('action run');
  };

}, 'SampleAction', []);

serenity.register(function() {
  return function() {
    console.log('action run 2');
  };

}, 'SampleAction2', []);
