import { Component, OnInit } from '@angular/core';
import { MatchData } from '../matchData/matchData';
import { MatchDataService } from '../matchData/matchData.service';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.css']
})
export class GameScoreComponent implements OnInit {
  matchData : MatchData;
  first_to_Dirk = [
    { 'count': 0, 'vis': false },
    { 'count': 1, 'vis': false },
    { 'count': 2, 'vis': false },
  ]

  first_to_Cand = [
    { 'count': 0, 'vis': false },
    { 'count': 1, 'vis': false },
    { 'count': 2, 'vis': false },
  ]

  constructor(private matchDataService: MatchDataService) { }

  ngOnInit(): void {
    this.setMatchData();
  }

  setMatchData(){
    this.matchData = this.matchDataService.getMatchData();
  }

  public getBox(c, i) {
    let path = '';
    if (i == 1) {
      if (this.first_to_Dirk[c].vis) {
        path = '../../assets/raw/box_filled.png';
      } else {
        path = '../../assets/raw/box_empty.png';
      }
    } else {
      if (this.first_to_Cand[c].vis) {
        path = '../../assets/raw/box_filled.png';
      } else {
        path = '../../assets/raw/box_empty.png';
      }
    }

    return path;
  }

  public toggleBox(c, i) {
    if (i == 1) {
      this.first_to_Dirk[c].vis = !this.first_to_Dirk[c].vis;
    } else {
      this.first_to_Cand[c].vis = !this.first_to_Cand[c].vis;
    }
  }

}
