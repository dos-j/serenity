import Injector from '../src/di/injector';
import { expect } from 'chai';

describe('Injector', () => {

  let injector;

  beforeEach(() => {
    injector = new Injector();
  });

  it('returns the dependencies', () => {
    
    const service1Response = 'test';
    const service2Response = 'test2';
    
    injector.services = {
      testService: {
        dependencies: [],
        service: () => service1Response 
      },
      testService2: {
        dependencies: [], 
        service: () => service2Response
      }
    };

    const result = injector.fetch(["testService"]);
    expect(result[0]).to.equal(service1Response);
  });

  it('returns multiple dependencies', () => {
    
    const service1Response = 'test';
    const service2Response = 'test2';
    
    injector.services = {
      testService: {
        dependencies: [],
        service: () => service1Response 
      },
      testService2: {
        dependencies: [], 
        service: () => service2Response
      }
    };

    const result = injector.fetch(["testService", "testService2"]);
    expect(result[0]).to.equal(service1Response);
    expect(result[1]).to.equal(service2Response);
  });
});

