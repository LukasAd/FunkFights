import { Component, OnInit } from '@angular/core';

export interface Game{
  'name': string;
  'path': string;
  'description': string;
}

@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.css']
})
export class AllPagesComponent implements OnInit {

  games: Game[];

  constructor() { }

  ngOnInit(): void {
    this.setGames();
  }

  setGames(){
    this.games = [
      {name:'Marken raten', path:'brands', description:'Spieler raten Markennamen anhand von bearbeiteten Logos.'},
      {name:'Quiz', path:'quiz', description:'Quizfragen aus verschiedenen Themenkategorien.'},
      {name:'Buchstabieren', path:'spelling', description:'Spieler buchstabieren vorgelesene Wörter.'},
      {name:'Musik Quiz', path:'musicquiz', description:'Spieler erraten Songnamen und interpreten'},
      {name:'Fehlerbilder', path:'error-image', description:'Zwei Bilder, die Spieler müssen die Unterschiede in den Bildern finden.'},
      {name:'Memory', path:'memory', description:'Klassisches Memory'},
      {name:'Kartenduell', path:'card-duel', description:'Rundenweise werden Karten mit Werten von 1 bis 11 gespielt. Die höhere Karte gewinnt.'},
      {name:'Wann war das?', path:'whenwasthat', description:'Die Spieler müssen ein historsiches Ereignis zeitlich einordnen.'},
      {name:'Sortieren', path:'sort', description:'Eine Liste von Elementen muss nach bestimmten Regeln sortiert.'},
    ];
    this.games.sort((a, b) => (a.name > b.name) ? 1 : -1);
    
  }

}
