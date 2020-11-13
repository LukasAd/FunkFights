import { Component, OnInit } from '@angular/core';
import SortJson from '../../assets/sort/sort.json';

export interface Entry {
  "label": string;
  "rank": number;
  "value": string;
  "solved": boolean;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  startGameBool: boolean;
  bestOf: number = 7;
  level: number;

  // data per level
  levelData: any;
  levelEntries: Entry[];
  candSolEntries: Entry[];

  showSolutionBool: boolean;

  // data per player move

  // entry that is going to be positioned next by player
  activeEntry: Entry;
  // entry index that has just been ranked
  indexToDrop: number;
  // answering status of active entry
  solCorrect: string;
  lastInsertIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.startGameBool = false;
    this.level = 0;
    this.setLevelData();
  }

  setLevelData() {
    this.levelData = SortJson[this.level];
    this.levelEntries = this.levelData.entries.sort((a, b) => (a.label > b.label) ? 1 : -1);
    let i = this.levelEntries.indexOf(this.levelData.reference);
    if (i >= 0) {
      this.levelEntries.splice(i,1);
    }
    this.levelEntries.map(x => x.solved = false);

    this.candSolEntries = [this.levelData.reference];

    this.showSolutionBool = false;
    this.solCorrect = "unsolved";

  }

  startGame() {
    this.startGameBool = !this.startGameBool;
  }

  showSolution() {
    let entries = this.levelEntries;
    if (!this.levelEntries.includes(this.levelData.reference)) {
      this.levelEntries.push(this.levelData.reference);
    };
    entries.sort((a, b) => (a.rank > b.rank) ? 1 : -1);
    this.candSolEntries = entries;
    this.levelEntries.map(x => x.solved = true);
    this.showSolutionBool = true;
    this.activeEntry = <Entry>{};
    this.lastInsertIndex = -1;
  }

  makeEntryActive(i: number) {
    if (!this.levelEntries[i].solved) {
      this.activeEntry = this.levelEntries[i];
      this.indexToDrop = i;
    }
  }

  // rank active entry at postion <pos>
  rankEntry(pos: number) {
    // check if any entry is active
    if (this.activeEntry.label) {
      // check if entry was ranked at correct position
      if ((pos == 0 && this.activeEntry.rank < this.candSolEntries[pos].rank)
        || (pos == this.candSolEntries.length && this.activeEntry.rank > this.candSolEntries[pos - 1].rank)
        || (this.candSolEntries[Math.max(0, (pos - 1))].rank < this.activeEntry.rank && this.candSolEntries[pos].rank > this.activeEntry.rank)) {
        this.solCorrect = "correct";
      } else {
        this.solCorrect = "incorrect";
      }
      this.candSolEntries.splice(pos, 0, this.activeEntry);

      // reset active entry
      this.activeEntry = <Entry>{};

      // set last position that has been ranked to mark solution status in html
      this.lastInsertIndex = pos;

      // mark ranked entry as solved
      this.levelEntries[this.indexToDrop].solved = true;
    }
  }

  updateLevel(up: boolean) {
    if (up && ((this.level + 1) < SortJson.length)) {
      this.level++;
      this.setLevelData();
    } else if (!up && (this.level > 0)) {
      this.level--;
      this.setLevelData();
    }
  }

}
