import { TestBed } from '@angular/core/testing';

import { MatchDataService } from './matchData.service';

describe('MatchDataService', () => {
  let service: MatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
