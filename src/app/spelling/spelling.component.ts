import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.css'],
  standalone: true,
  imports: [DragDropModule, MatButtonModule, NgIf, NgFor]
})
export class SpellingComponent implements OnInit {
  correctOrder: boolean = false;

  constructor(private http: HttpClient, private util: UtilityService) { }

  ngOnInit(): void {
    this.http.get('assets/words.json').subscribe(data => {
      this.words = data;
      //console.log(this.words[100]);
      this.prepareData();
    });
  }
  words: any = [];
  myString: string = '';
  jumbled: any = [];
  correct: any = [];
  clue:string = "";

  prepareData() {
    let rand = this.util.getRand(this.words.length); // select a random word
    this.myString = this.words[rand].data; // get a random word
    this.clue = this.words[rand].description;
    this.correctOrder = false;
    this.myString = this.myString.toLocaleUpperCase(); // turn into upper case
    this.jumbled = [...this.myString]; // make string Array from letters
    this.correct = Array.from(this.jumbled); // clone the array
    this.jumbled.sort(); // sort alphabetically
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
    console.log(`first letter: ${this.jumbled[0]}`);
    //
    for (let index = 0; index < this.jumbled.length; index++) {
      if (this.jumbled[index] !== this.correct[index]) {
        this.correctOrder = false;
        break;
      }
    }
    // 2/4
    this.myString = this.jumbled.join("");
    this.myString = this.myString.toLocaleLowerCase();
    console.log(this.myString);
    this.words.forEach((element: any) => {
      if(element.data == this.myString){
        this.correctOrder=true;
        console.log("YES found a match")

      }
    });
    //
    if (this.correctOrder) {

    }
  }
      //////////////////// this is only really for display purposes to reveal answer gradually
      async cheat(): Promise<void> { 
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


