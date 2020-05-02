import { Component, OnInit, TrackByFunction } from '@angular/core';
import { MatchDataService } from '../matchData/matchData.service';
import BrandsJson from '../../assets/brands/brands.json';
import { MatchData } from '../matchData/matchData';



@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  startGameBool: boolean = true;
  matchData: MatchData;
  columns: number = 4;
  recordsPerLevel: number = 12;
  level: number = 0;
  records = BrandsJson;
  subRecords = [];



  constructor(private matchDataService: MatchDataService) { }

  ngOnInit() {
    this.setRoundRecords();
    this.setMatchData();
  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  setMatchData() {
    this.matchData = this.matchDataService.getMatchData();
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

  public getLogo(id) {
    let path = '../../assets/brands/' + id + '/logo.png'
    return path;
  }

  public getSol(id) {
    let path = '../../assets/brands/' + id + '/sol.png'
    return path;
  }



  public toggleSol(i) {
    i = i - 1;
    this.records[i].sol = !this.records[i].sol;
  }

  public previousLevel() {
    this.level--;
    this.setRoundRecords();
  }

  public nextLevel() {
    this.level++;
    this.setRoundRecords();
  }

}
