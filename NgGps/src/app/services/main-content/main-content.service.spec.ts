import { TestBed, inject } from '@angular/core/testing';

import { MainContentService } from './main-content.service';

describe('MainContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainContentService]
    });
  });

  it('should be created', inject([MainContentService], (service: MainContentService) => {
    expect(service).toBeTruthy();
  }));
});
