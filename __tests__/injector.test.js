jest.unmock('../src/di/injector.js');
import * as Injector from '../src/di/injector';
import dataWrapperMock from '../src/di/dataWrapper';

describe('Injector', () => {

  afterEach(() => {
    Object.keys(Injector.services).forEach(function(key) { delete Injector.services[key]; });
  });

  describe('fetching dependencies', () => {
    it('returns the dependencies', () => {
      
      const service1Response = 'test';
      const service2Response = 'test2';
      
      Injector.services['testService'] = {
          dependencies: [],
          service: () => service1Response 
      }; 
      
      Injector.services['testService2'] = {
          dependencies: [], 
          service: () => service2Response
      };

      const result = Injector.fetch(["testService"]);
      expect(result[0]).toBe(service1Response);
    });

    it('returns multiple dependencies', () => {
      const service1Response = 'test';
      const service2Response = 'test2';
   
      Injector.services['testService'] = {
          dependencies: [],
          service: () => service1Response 
      }; 
      
      Injector.services['testService2'] = {
          dependencies: [], 
          service: () => service2Response
      };
      const result = Injector.fetch(["testService", "testService2"]);
      expect(result[0]).toBe(service1Response);
      expect(result[1]).toBe(service2Response);
    });
  });

  describe('registering dependencies', () => {
    it('adds to the service registry', () => {
      
      const depRv = {
        'test': 'service'
      };

      const dependency = function() {
        return depRv;    
      };  
      Injector.register(dependency, 'dep1', []);

      expect(Injector.services['dep1'].service).toBe(dependency);
    });
  });


  describe('registering data Injector.services', () => {

    it('registers a data object', () => {

      const state = {
        'test': 'somethingElse'
      };
      Injector.registerState(() => {
        return state;
      }, 'SomeState');

      const registeredStateService = Injector.services['SomeState'].service();
      expect(dataWrapperMock).toBeCalled();
      expect(dataWrapperMock.mock.calls[0][0]).toBe(state);
    }); 

  });

  function generateDependency(val) {
    return function() {
      return val;
    };
  }

});

