import { TestBed, inject } from '@angular/core/testing';

import { LocoGpsService } from './loco-gps.service';

describe('LocoGpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocoGpsService]
    });
  });

  it('should be created', inject([LocoGpsService], (service: LocoGpsService) => {
    expect(service).toBeTruthy();
  }));
});
