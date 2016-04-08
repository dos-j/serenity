import App from 'App';
import { ReactInjector } from 'serenitydi';

export const App1 = ReactInjector(App, {
  'genericAction' : 'SampleAction2'
}); 

export const App2 = ReactInjector(App, {
  'genericAction' : 'SampleAction'
});  
