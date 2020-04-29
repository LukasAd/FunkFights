import { Component, OnInit, SystemJsNgModuleLoader, TrackByFunction } from '@angular/core';
import BrandsJson from '../../assets/brands/brands.json';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  public columns = 4;
  recordsPerLevel = 12;
  level = 0;
  private records = BrandsJson;
  private subRecords = [];
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


  constructor() { }

  ngOnInit() {
    this.setRoundRecords();
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
    //console.log(id)
    let path = '../../assets/brands/' + id + '/logo.png'
    return path;
  }

  public getSol(id) {
    let path = '../../assets/brands/' + id + '/sol.png'
    return path;
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

  public toggleSol(i) {
    i = i - 1;
    console.log(i)
    console.log(this.records);
    console.log(this.records[i]);
    this.records[i].sol = !this.records[i].sol;
    console.log(this.records[i].sol);
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
