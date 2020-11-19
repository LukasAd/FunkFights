import { Component, OnInit, TrackByFunction } from '@angular/core';
import { MatchDataService } from '../matchData/matchData.service';
import BrandsJson from '../../assets/brands/brands.json';



@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  bestOf: number = 5;
  startGameBool: boolean = true;

  recordsPerLevel: number = 12;
  columns: number = 4;
  level: number = 0;
  records = BrandsJson;
  subRecords = [];



  constructor(private matchDataService: MatchDataService) { }

  ngOnInit() {
    this.setLevelData();
  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  setLevelData() {
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

  getPicture(id): string{
    if(this.records[id-1].sol){
      return 'assets/brands/' + id + '/sol.png';
    } else {
      return 'assets/brands/' + id + '/logo.png';
    }
  }

  toggleSol(i) {
    i = i - 1;
    this.records[i].sol = !this.records[i].sol;
  }

  updateLevel(up: boolean) {
    if (up && ((this.level + 1) < (this.records.length / this.recordsPerLevel))) {
      this.level++;
      this.setLevelData();
    } else if (!up && (this.level > 0)) {
      this.level--;
      this.setLevelData();
    }
  }

}
