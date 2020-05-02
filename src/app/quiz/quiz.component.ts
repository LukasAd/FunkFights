import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  bestOf: number = 5;
  categories : string[] = ["Sport","Geschichte","Aktuelles","Politik","Astro Astro"];
  startGameBool: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.startGameBool = !this.startGameBool;
  }
}
