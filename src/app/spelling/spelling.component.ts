import { Component, OnInit, TrackByFunction } from '@angular/core';
import WordsJson from '../../assets/spelling/words.json';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.css']
})
export class SpellingComponent implements OnInit {
  startGameBool : boolean = true;
  columns : number = 5;
  recordsPerLevel : number = 15;
  level : number = 0;
  word : string = "";
  records = WordsJson;
  subRecords = [];


  constructor() { }

  ngOnInit(): void {
    this.setRoundRecords();
  }

  startGame(){
    this.startGameBool = !this.startGameBool;
  }

  public setRoundRecords() {
    let offset = this.level * this.recordsPerLevel;
    this.subRecords = this.records.slice(offset, offset + this.recordsPerLevel);
  }

  public get table(): number[][] {
    const rowCount = Math.floor(this.subRecords.length / this.columns);
    const remainder = this.subRecords.length % this.columns;
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(this.subRecords.slice(i * this.columns, (i * this.columns) + this.columns))
    }
    if (remainder) {
      rows.push(this.subRecords.slice(this.subRecords.length - remainder, this.subRecords.length));
    }
    return rows;
  };

  public trackRow: TrackByFunction<number[]> = (index, item) => {
    return index;
  };

  public trackRecord: TrackByFunction<number> = (index, item) => {
    return item;
  };

  public previousLevel() {
    this.level--;
    this.setRoundRecords();
  }

  public nextLevel() {
    this.level++;
    this.setRoundRecords();
  }

  public setWord(id,w){
    if(id!=-1){
      id = id-1;
      console.log(id)
      console.log(this.records[id].solved);
      this.records[id].solved = !this.records[id].solved;
      console.log(this.records[id].solved);
    }   
    this.word = w;
  }
}
