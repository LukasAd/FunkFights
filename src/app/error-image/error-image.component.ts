import { Component, OnInit } from '@angular/core';
import ErrorImageJson from '../../assets/error-image/error-images.json';

@Component({
  selector: 'app-error-image',
  templateUrl: './error-image.component.html',
  styleUrls: ['./error-image.component.css']
})
export class ErrorImageComponent implements OnInit {
  bestOf: number = 5;
  records = ErrorImageJson;
  maxLevel: number;
  level: number = 1;
  startGameBool: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.records.length;
  }

  toggleStartGame() {
    this.startGameBool = !this.startGameBool;
  }

  getOriginalImagePath(id) {
    console.log(id);
    if (id < 1 || id > this.records.length) {
      return "../../assets/error-image/original.png";
    }
    return "../../assets/error-image/" + id + "/original.jpg"
  }

  getErrorImagePath(id) {
    if (id < 1 || id > this.records.length) {
      return "../../assets/error-image/error.png";
    } else if (this.records[id - 1].sol) {
      return "../../assets/error-image/" + id + "/sol.jpg";
    } else if (!this.records[id - 1].sol) {
      return "../../assets/error-image/" + id + "/error.jpg";
    } else {
      return "";
    }
  }

  toggleSol(id) {
    this.records[id - 1].sol = !this.records[id - 1].sol;
  }

  public previousLevel() {
    this.level--;
  }

  public nextLevel() {
    this.level++;
  }


}
