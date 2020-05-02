import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from '../matchData/matchData';
import { MatchDataService } from '../matchData/matchData.service';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.css']
})
export class GameScoreComponent implements OnInit {
  @Input() bestOf: number;
  matchData: MatchData;
  firstToDirk = [];
  firstToCand = [];

  constructor(private matchDataService: MatchDataService) { }

  ngOnInit(): void {
    this.setMatchData();
    this.setPointBoxes();
  }

  setMatchData() {
    this.matchData = this.matchDataService.getMatchData();
  }

  setPointBoxes() {
    let boxCount = Math.floor(this.bestOf / 2) + 1;
    for (let i = 0; i < boxCount; i++) {
      this.firstToDirk.push({ 'count': i, 'vis': false });
      this.firstToCand.push({ 'count': i, 'vis': false })
    }
  }

  public getBox(c, i) {
    let path = '';
    if (i == 1) {
      if (this.firstToDirk[c].vis) {
        path = '../../assets/raw/box_filled.png';
      } else {
        path = '../../assets/raw/box_empty.png';
      }
    } else {
      if (this.firstToCand[c].vis) {
        path = '../../assets/raw/box_filled.png';
      } else {
        path = '../../assets/raw/box_empty.png';
      }
    }

    return path;
  }

  public toggleBox(c, i) {
    if (i == 1) {
      this.firstToDirk[c].vis = !this.firstToDirk[c].vis;
    } else {
      this.firstToCand[c].vis = !this.firstToCand[c].vis;
    }
  }

}
