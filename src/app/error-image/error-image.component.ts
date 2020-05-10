import { Component, OnInit } from '@angular/core';
import ErrorImageJson from '../../assets/error-image/error-images.json';

@Component({
  selector: 'app-error-image',
  templateUrl: './error-image.component.html',
  styleUrls: ['./error-image.component.css']
})
export class ErrorImageComponent implements OnInit {
  bestOf: number = 9;
  records = ErrorImageJson;
  maxLevel: number;
  level: number = 0;
  startGameBool: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.records);
    console.log(this.level);
    console.log(this.records.length);
    this.maxLevel = this.records.length;
  }

  toggleStartGame() {
    this.startGameBool = !this.startGameBool;
  }

  getOriginalImagePath(id) {
    if (id < 0 || id > this.records.length - 1 ) {
      return "../../assets/error-image/original.png";
    }
    return "../../assets/error-image/" + id + "/original.png"
  }

  getErrorImagePath(id) {
    console.log(id);
    if (id < 0 || id > this.records.length -1) {
      return "../../assets/error-image/error.png";
    } else if (this.records[id].sol) {
      return "../../assets/error-image/" + id + "/sol.png";
    } else if (!this.records[id].sol) {
      return "../../assets/error-image/" + id + "/error.png";
    } else {
      return "";
    }
  }

  toggleSol(id) {
    this.records[id].sol = !this.records[id].sol;
  }

  public previousLevel() {
    this.level--;
  }

  public nextLevel() {
    this.level++;
  }


}
