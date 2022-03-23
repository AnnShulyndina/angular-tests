import { TestBed } from '@angular/core/testing';

import { SecondDependancyService } from './second-dependancy.service';

describe('SecondDependancyService', () => {
  let service: SecondDependancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondDependancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
