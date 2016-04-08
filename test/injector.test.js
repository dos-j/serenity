import * as Injector from '../src/di/injector';
import { expect } from 'chai';
import sinon from 'sinon';

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
      expect(result[0]).to.equal(service1Response);
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
      expect(result[0]).to.equal(service1Response);
      expect(result[1]).to.equal(service2Response);
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

      expect(Injector.services['dep1'].service).to.equal(dependency);
    });
  });


  describe('registering data Injector.services', () => {
  
  
  });

  function generateDependency(val) {
    return function() {
      return val;
    };
  }

});

