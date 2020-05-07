import { Component, OnInit, TrackByFunction } from '@angular/core';
import { MatchData } from '../matchData/matchData';
import { MatchDataService } from '../matchData/matchData.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  pairsCounter: number = 21;
  startGameBool: boolean = true;
  matchData: MatchData;
  records: any[];
  solvedRecords: any[] = [];
  columns: number = 7;
  dirkCount: number = 0;
  candCount: number = 0;
  dirksTurn: boolean = true;

  constructor(private matchDataService: MatchDataService) { }

  ngOnInit(): void {
    this.initializeBoard();
    this.setMatchData();
  }

  proceed() {
    let possPair = [];
    for (let i = 0; i < this.records.length; i++) {
      if (this.records[i].show) {
        possPair.push(this.records[i]);
        this.records[i].show = !this.records[i].show;
      }
    }
    if (possPair[0].id == possPair[1].id) {
      if (this.dirksTurn) {
        this.dirkCount++;
      } else {
        this.candCount++;
      }
      this.solvedRecords.push(possPair[0]);
      this.solvedRecords.push(possPair[1]);
    } else {
      this.dirksTurn = !this.dirksTurn;
    }

  }

  setMatchData() {
    this.matchData = this.matchDataService.getMatchData();
  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  initializeBoard() {
    let records = new Array();
    for (let i = 0; i < this.pairsCounter * 2; i++) {
      records.push({ id: i % this.pairsCounter, show: false, index: i });
    }
    this.records = records;
    this.shuffleBoard();
  }

  shuffleBoard() {
    let board = this.records;
    for (let i = 0; i < board.length; i++) {
      let randNumber = Math.floor(Math.random() * Math.floor(board.length));
      let temp = board[i];
      board[i] = board[randNumber];
      board[randNumber] = temp;
    }
    this.records = board;
  }

  getImagePath(index) {
    for (let el of this.solvedRecords) {
      if (el == this.records[index]) {
        return "../../assets/memory/solved.png";
      }
    }
    if (this.records[index].show) {
      return "../../assets/memory/" + this.records[index].id + "/card.png";
    } else {
      return "../../assets/memory/covered.png";
    }
  }

  countUncoveredCards() {
    let count = 0;
    for (let card of this.records) {
      if (card.show) {
        count++;
      };
    }
    return count;
  }

  toggleShowImage(index) {

    if (this.countUncoveredCards() < 2 || this.records[index].show) {
      this.records[index].show = !this.records[index].show;
    }

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public get table(): number[][] {
    const rowCount = Math.floor(this.records.length / this.columns);
    const remainder = this.records.length % this.columns;
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(this.records.slice(i * this.columns, (i * this.columns) + this.columns))
    }
    if (remainder) {
      rows.push(this.records.slice(this.records.length - remainder, this.records.length));
    }
    return rows;
  };

  public trackRow: TrackByFunction<number[]> = (index, item) => {
    return index;
  };

  public trackRecord: TrackByFunction<number> = (index, item) => {
    return item;
  };

}
