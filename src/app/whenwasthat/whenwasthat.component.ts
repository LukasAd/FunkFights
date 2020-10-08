import { Component, OnInit } from '@angular/core';
import { MatchData } from '../matchData/matchData';
import DatesJson from '../../assets/whenwasthat/dates.json';

export interface Date {
  id: number,
  question: string,
  year: number,
  factor: number
}


@Component({
  selector: 'app-whenwasthat',
  templateUrl: './whenwasthat.component.html',
  styleUrls: ['./whenwasthat.component.css']
})
export class WhenwasthatComponent implements OnInit {
  bestOf: number = 5;
  startGameBool: boolean = true;
  tolerances: number[];
  toleranceStrings: string[];
  toleranceLevel: number;
  level: number = 0;
  dates: Date[] = DatesJson;

  constructor() { }

  ngOnInit(): void {
    this.setLevelData();
  }

  setLevelData() {
    this.toleranceLevel = 0;
    this.tolerances = Array.from(Array(11).keys()).map((x => (x - 5) * this.dates[this.level].factor));
  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  updateTolerance(up: boolean) {
    this.toleranceLevel++;
  }

  processInput(dirkInput, candInput) {

  }

  updateLevel(up: boolean) {
    if (up && this.level <= (this.dates.length - 1)) {
      this.level++;
    } else if (!up && this.level > 0) {
      this.level--;
    }
    this.setLevelData();
  }

}
