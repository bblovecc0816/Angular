import { TestBed, inject } from '@angular/core/testing';

import { TriggersService } from './all-triggers-summary.service';

describe('AllTriggersSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriggersService]
    });
  });

  it('should be created', inject([TriggersService], (service: TriggersService) => {
    expect(service).toBeTruthy();
  }));
});
