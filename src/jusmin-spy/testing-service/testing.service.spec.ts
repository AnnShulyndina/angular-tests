import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe('TestingService', () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService
  let firstDependencyReturnValueSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });
    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    // firstDependencyReturnValueSpy = spyOn(firstDependency, 'returnValue')
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('должен возвращать значение массива по указанному индексу - оригинальный метод класса',
    () => {
    spyOn(firstDependency, 'returnValue').and.returnValue('two')
    const result = service.getValue(1);
    expect(result).toBe('two');
  })

  it('должен возвращать значение массива по указанному индексу - spyOn and callThough',
    () => {
      spyOn(firstDependency, 'returnValue').and.callThrough()
      const result = service.getValue(1);
      expect(result).toBe('two');
    })

   it('должен возвращать значение массива по указанному индексу - spyOn and returnValue', () => {
     spyOn(firstDependency, 'returnValue').and.returnValue('two')
     const result = service.getValue(1);
     expect(result).toBe('two');
   })

  it('должен возвращать значение массива по указанному индексу - spyOn and callFake', () => {
    spyOn(firstDependency, 'returnValue').and.callFake(()=> 'three')
    const result = service.getValue(1);
    expect(result).toBe('three');
  })

  it('должен возвращать значение массива, возвращаемого функцией getIndex', () => {
    spyOn(service, 'getIndex').and.returnValue(0)
    const result = service.getValue(service.getIndex());
    expect(result).toBe('one');
  })
});
