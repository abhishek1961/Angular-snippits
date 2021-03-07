import { TestBed, inject } from '@angular/core/testing';

import { SmsserveService } from './smsserve.service';

describe('SmsserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsserveService]
    });
  });

  it('should be created', inject([SmsserveService], (service: SmsserveService) => {
    expect(service).toBeTruthy();
  }));
});
