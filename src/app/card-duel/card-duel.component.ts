import { Component, OnInit } from '@angular/core';
import { MatchData } from '../matchData/matchData';
import { MatchDataService } from '../matchData/matchData.service';

@Component({
  selector: 'app-card-duel',
  templateUrl: './card-duel.component.html',
  styleUrls: ['./card-duel.component.css']
})
export class CardDuelComponent implements OnInit {
  matchData: MatchData;
  dirkPoints: number = 0;
  candPoints: number = 0;
  dirkCard: number;
  candCard: number;
  dirkWins: boolean;
  candWins: boolean;

  constructor(private matchDataService: MatchDataService) { }

  ngOnInit(): void {
    this.setMatchData();
    }

  setMatchData() {
    this.matchData = this.matchDataService.getMatchData();
  }

  processInput(dirkInput, candInput){
    dirkInput = +dirkInput;
    candInput = +candInput;
    this.dirkCard = dirkInput;
    this.candCard = candInput;
    if (dirkInput > candInput){
      this.dirkPoints++;
      this.dirkWins = true;
    } else if ( dirkInput < candInput){
      this.candPoints++;
      this.candWins = true;
    } else {
      this.dirkWins = false;
      this.candWins = false;
    }
  }

}
