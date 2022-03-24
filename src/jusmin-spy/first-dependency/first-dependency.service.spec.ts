import { TestBed } from '@angular/core/testing';

import { FirstDependencyService } from './first-dependency.service';

describe('FirstDependencyService', () => {
  let service: FirstDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
