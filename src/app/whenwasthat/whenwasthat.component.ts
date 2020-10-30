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
  // Gamesettings
  bestOf: number = 5;
  startGameBool: boolean = false;


  date: Date;
  dates: Date[] = DatesJson;
  level: number = 0;

  tolerances: number[];
  toleranceStrings: string[];
  toleranceLevel: number;


  candSolution: string;

  yearCardValue: number;
  confirmButtonText: string;

  constructor() { }

  ngOnInit(): void {
    this.setLevelData();
  }

  setLevelData() {
    this.toleranceLevel = 0;
    this.tolerances = Array.from(Array(11).keys()).map((x => (x - 5) * this.dates[this.level].factor));
    this.toleranceToString();
    this.date = this.dates[this.level];
    this.yearCardValue = 0;
    this.confirmButtonText = "Tipp abgeben";
    this.candSolution = "unanswered";
  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  updateTolerance(up: boolean) {
    if (up && this.toleranceLevel < 5) {
      this.toleranceLevel++;
    } else if (!up && this.toleranceLevel > 0) {
      this.toleranceLevel--;
    }
  }

  processInput(dirkInput: string, candInput: string) {
    let input: number;
    if (dirkInput != "" && this.candSolution === "unanswered") {
      input = parseInt(dirkInput);
    } else if (this.candSolution === "unanswered") {
      input = parseInt(candInput);
    }
    if (!isNaN(input)) {
      this.confirmButtonText = input.toString();
      this.setAllowedYears();
      this.yearCardValue = this.date.year;
    }
    const allowedLowerBound: number = this.date.year - this.toleranceLevel * this.date.factor;
    const allowedUpperBound: number = this.date.year + this.toleranceLevel * this.date.factor;
    if (this.candSolution === "unanswered") {
      if (input >= allowedLowerBound && input <= allowedUpperBound) {
        this.candSolution = 'correct';
      } else {
        this.candSolution = 'incorrect';
      }
    }

  }

  setAllowedYears() {
    const years: number[] = Array.from(Array(11).keys()).map((x => ((x - 5) * this.date.factor) + this.date.year));
    this.tolerances = years;
    this.toleranceStrings = years.map(String);

  }

  updateLevel(up: boolean) {
    if (up && this.level < (this.dates.length - 1)) {
      this.level++;
    } else if (!up && this.level > 0) {
      this.level--;
    }
    this.setLevelData();
  }

  toleranceToString() {
    let strings: string[] = [];
    for (let t of this.tolerances) {
      if (t > 0) {
        strings.push(`+${t.toString()}`);
      } else {
        strings.push(t.toString());
      }
    }
    this.toleranceStrings = strings;
  }
}
