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

      const result = Injector.fetchAll([ 'testService' ]);
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
      const result = Injector.fetchAll([ 'testService', 'testService2' ]);
      expect(result[0]).toBe(service1Response);
      expect(result[1]).toBe(service2Response);
    });

    it('returns a single dependency not wrapped in an array', () => {
      const service1Response = 'test';
      const service2Response = 'test2';

      Injector.services['testService'] = {
          dependencies: ['testService2'],
          service: testService => () => {
            return testService();
          }
      };

      Injector.services['testService2'] = {
          dependencies: [],
          service: () => () => service2Response
      };

      const result = Injector.fetch('testService');

      expect(result()).toBe(service2Response);
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
      Injector.register('dep1', [], dependency);

      expect(Injector.services['dep1'].service).toBe(dependency);
    });
  });


  describe('registering data Injector.services', () => {

    it('registers a data object', () => {

      const state = {
        'test': 'somethingElse'
      };
      Injector.registerState('SomeState', () => {
        return state;
      });

      const registeredStateService = Injector.services['SomeState'].service();
      expect(dataWrapperMock).toBeCalled();
      expect(dataWrapperMock.mock.calls[0][0]).toBe(state);
    });

  });

  describe('Generating a dependency tree', () => {

    it('generates a tree for the dependencies', () => {

      Injector.services['A'] = {
        dependencies: [ 'A.1', 'A.2', 'A.3' ]
      };

      Injector.services['A.1'] = {
        dependencies: [ 'A.1.1', 'A.1.2' ]
      };

      Injector.services['A.1.1'] = {
        dependencies: []
      };

      Injector.services['A.1.2'] = {
        dependencies: []
      };

      Injector.services['A.2'] = {
        dependencies: []
      };

      Injector.services['A.3'] = {
        dependencies: []
      };

      expect(Injector.generateDependencyTree('A')).toEqual({
        'A.1': {
          'A.1.1': {},
          'A.1.2': {}
        },
        'A.2': {},
        'A.3': {}
      });

    });

    it('will handle missing dependencies', () => {

      Injector.services['B'] = {
        dependencies: [ 'B.1', 'B.2', 'B.3' ]
      };

      Injector.services['B.1'] = {
        dependencies: [ 'B.1.1', 'B.1.2' ]
      };

      Injector.services['B.1.1'] = {
        dependencies: []
      };

      Injector.services['B.2'] = {
        dependencies: []
      };

      Injector.services['B.3'] = {
        dependencies: []
      };

      expect(Injector.generateDependencyTree('B')).toEqual({
        'B.1': {
          'B.1.1': {},
          'B.1.2': '[missing dependency]'
        },
        'B.2': {},
        'B.3': {}
      });

    });

    it('will not infinitely recurse a tree', () => {

      Injector.services['C'] = {
        dependencies: [ 'C.1', 'C.2', 'C.3' ]
      };

      Injector.services['C.1'] = {
        dependencies: [ 'C.1.1', 'C.1.2' ]
      };

      Injector.services['C.1.1'] = {
        dependencies: []
      };

      Injector.services['C.1.2'] = {
        dependencies: [ 'C.1' ]
      };

      Injector.services['C.2'] = {
        dependencies: []
      };

      Injector.services['C.3'] = {
        dependencies: []
      };

      expect(Injector.generateDependencyTree('C')).toEqual({
        'C.1': {
          'C.1.1': {},
          'C.1.2': {
            'C.1': '[circular dependency]'
          }
        },
        'C.2': {},
        'C.3': {}
      });

    });

  });

  function generateDependency(val) {
    return function() {
      return val;
    };
  }

});

