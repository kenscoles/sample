import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../shared/services/utility.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-anagrams',
  templateUrl: './anagrams.component.html',
  styleUrls: ['./anagrams.component.css'],
  standalone: true,
  imports: [CommonModule, DragDropModule, MatButtonModule]
})
export class AnagramsComponent implements OnInit{
  constructor(private http: HttpClient, private util: UtilityService) { }
  ngOnInit(): void {
    this.http.get('assets/general.json').subscribe(data => {
      this.list = data;
      //console.log(this.list);
      this.prepareData();
    });
  }
  list: any = [];
  myString: string = '';
  jumbled: any = [];
  correct: any = [];
  correctOrder: boolean = false;
  category: string = '';
  cheated = false;

  prepareData() {
    this.cheated = false;
    this.correctOrder = false;
    this.jumbled = [];
    this.correct = [];
    let rand = this.util.getRand(this.list.length); // select a random word
    this.myString = this.list[rand].name; // get a random word
    this.category = this.list[rand].type; // get the type of data
    this.correctOrder = false;
    this.myString = this.myString.toLocaleUpperCase(); // turn into upper case
    this.jumbled = [...this.myString]; // make string Array from letters
    this.correct = Array.from(this.jumbled); // clone the array
    //this.jumbled.sort(); // sort alphabetically
    this.myString = this.jumbled.join("");
    let test = this.correct.join("");
    if (this.myString == test) { // if word has letters in alph order
      this.util.sattoloCycle(this.jumbled) // then shuffle it!
    }
    console.log(this.jumbled);
    console.log(this.correct);
  }
  drop(event: CdkDragDrop<string[]>): void {
    this.correctOrder = true;
    moveItemInArray(this.jumbled, event.previousIndex, event.currentIndex);
    //console.log(`first letter: ${this.jumbled[0]}`);
    //
    for (let index = 0; index < this.jumbled.length; index++) {
      if (this.jumbled[index] !== this.correct[index]) {
        this.correctOrder = false;
        break;
      }
    }
    if (this.correctOrder) {

    }
  }
      //////////////////// this is only really for display purposes to reveal answer gradually
      async cheat(): Promise<void> { 
        this.cheated = true;
        return new Promise<void>(async (resolve) => {
          const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
          for (let index = 0; index < this.correct.length; index++) { // go through each letter
            await delay(1000)                                         // pause for one second
            for (let y = index; y < this.jumbled.length; y++) { //inner loop  
              if (this.correct[index] == this.jumbled[y]) {     // find matching letter and
                moveItemInArray(this.jumbled, y, index);        // move it to correct position
              }
            }
          }
          resolve();
          this.correctOrder=true // only do this after above is resolved
        });
      }

}

