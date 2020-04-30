import { Injectable } from '@angular/core';
import { MatchData } from './matchData';
import { MATCHDATA } from './mockMatchData';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {

  constructor() { }

  getMatchData(): MatchData {
    return MATCHDATA;
  }
}
