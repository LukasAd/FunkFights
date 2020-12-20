import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-sayings',
  templateUrl: './complex-sayings.component.html',
  styleUrls: ['./complex-sayings.component.css']
})
export class ComplexSayingsComponent implements OnInit {
  bestOf: number = 7;
  constructor() { }

  ngOnInit(): void {
  }

}
