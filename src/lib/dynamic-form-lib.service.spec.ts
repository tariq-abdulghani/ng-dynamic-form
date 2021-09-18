import { TestBed } from '@angular/core/testing';

import { DynamicFormLibService } from './dynamic-form-lib.service';

describe('DynamicFormLibService', () => {
  let service: DynamicFormLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
