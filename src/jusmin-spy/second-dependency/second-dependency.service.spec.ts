import { TestBed } from '@angular/core/testing';

import { SecondDependencyService } from './second-dependency.service';

describe('SecondDependencyService', () => {
  let service: SecondDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
