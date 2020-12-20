import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicquiz',
  templateUrl: './musicquiz.component.html',
  styleUrls: ['./musicquiz.component.css']
})
export class MusicquizComponent implements OnInit {
  bestOf: number = 7;


  constructor() { }

  ngOnInit(): void {
  }

}
