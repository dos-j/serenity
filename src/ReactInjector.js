import {createElement, Component} from 'react';
import serenity from './index';

function getPropsFromInjectables() {
  const injectKeys = Object.keys(injectables);
  const injectVals = serenity.fetch(injectKeys.map(key => injectables[key]));
  const newProps = injectVals.reduce((newProps, dep1, index) => {
    newProps[injectKeys[index]] = dep1;
    return newProps;
  }, {});

  return newProps;
}

export default function(WrappedComponent, injectables) {

  const propsToInject = getPropsFromInjectables(injectables); 

  return class ReactInjectorComponent extends Component {

    constructor(props) {
      super(props);
    }

    render() {

      return createElement(WrappedComponent, {
       ...this.props,
       ...propsToInject
     }); 
    }
  };
}



