import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatIconModule, CommonModule]
})
export class TablesComponent implements OnInit {
  constructor(private util: UtilityService) { }

  ngOnInit(): void {
    this.createTable();
  }

  myNumbers: number[] = [];
  myArray: number[] = [];
  myTable: number = 0;
  question: number = 0;
  product: number = 0;
  correct: boolean = false;
  answer: string = '';
  tileFont: string = 'green';
  tileText: string = '';
  myIcon:string = "";
  

  createTable() {
    this.myTable = this.util.generateRandomInteger(2, 12);
    this.myNumbers = [];
    for (var i = 1; i < 13; i++) {
      this.myNumbers.push(i * this.myTable);
    }
    this.util.sattoloCycle(this.myNumbers);
    this.getRandomOrder(); // picks six different calculations (between 2 and 12)
    this.newTry();
  }

  newTry() {
    if (this.myArray.length) { // check whether more questions are left
      this.util.sattoloCycle(this.myNumbers); ///////////////////////////////////??????????????? 
      this.answer = '?';
      this.question = this.myArray[0];
      this.correct = false;
      this.product = this.myTable * this.question; //calc the answer
      this.tileFont = "blue"; // initialise answer display
      this.tileText = "";
      this.myIcon = "";
      this.removeQuestion(); // remove current number as it's been used
    }
    else { // if all six questions used
      this.createTable(); // pick another random table
    }
  }

  async checkAnswer(num: number) {
   // const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
    this.answer = num.toString(); // display the chosen answer
    if (num == this.product) {
      console.log("YES");
      this.correct = true;
      this.tileFont = "green";
      this.myIcon = "emoji_emotions";
      this.tileText = "Y";
    }
    else {
      this.tileFont = "red";
      this.tileText = "NO";
      this.myIcon = "mood_bad";
    }
    await this.util.delay(3000)// delay function is in util service
    if(this.correct) {
      this.newTry()
    }
    
  }

  removeQuestion() {
    //var myDeletions = [0];
    this.util.removeArrayValues(this.myArray, [0]);
    console.log("questions: ",this.myArray)
  }
  getRandomOrder() { // picks six calculations on the table
    this.myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.util.sattoloCycle(this.myArray); // shuffle
    this.myArray = this.myArray.slice(0, 6);// take first six
  }
}
