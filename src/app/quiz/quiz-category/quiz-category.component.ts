import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-category',
  templateUrl: './quiz-category.component.html',
  styleUrls: ['./quiz-category.component.css']
})
export class QuizCategoryComponent implements OnInit {
  @Input() category: string;
  toggle: boolean[] = [false, false, false, false, false, false];
  dirkWins: boolean = false;
  candWins: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkWinner() {
    if (this.toggle[0] && this.toggle[2] && this.toggle[4]) {
      this.dirkWins = true;
    } else {
      this.dirkWins = false;
    }
    if (this.toggle[1] && this.toggle[3] && this.toggle[5]) {
      this.candWins = true;
    } else {
      this.candWins = false;
    }
  }

  toggleColor(i) {
    this.toggle[i] = !this.toggle[i];
    this.checkWinner();
  }

}
