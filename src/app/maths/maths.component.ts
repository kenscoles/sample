import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-maths',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule, MatGridListModule, MatIconModule],
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.css'
})
export class MathsComponent implements OnInit {

  ngOnInit(): void {
    this.test();
  }
  rand = 0;
  operation: string = ""
  symbol = ""
  a = 0
  b = 0
  c = 0
  answer: string = ""
  question: any[] = []
  tileFont: string = 'green';
  tileText: string = '';
  myIcon: string = "";
  correct = 0;
  op = [
    {
      "id": 1,
      "name": "add",
      "symbol": "+",
      "min": 1,
      "max": 50
    },
    {
      "id": 2,
      "name": "subtract",
      "symbol": "-",
      "min": 1,
      "max": 50
    },
    {
      "id": 3,
      "name": "multiply",
      "symbol": "x",
      "min": 2,
      "max": 12
    },
    {
      "id": 4,
      "name": "divide",
      "symbol": "÷",
      "min": 2,
      "max": 12
    }
  ]
  delay = (ms: number) => new Promise(r => setTimeout(r, ms));

  getRandomInt(min: number, max: number) {
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }
  test() {
    this.correct = 0; // reset
    this.question=[];
    this.myIcon = "mood_bad";
    //this.myIcon = "emoji_emotions"; /////// ///////  /////// ////// **********
    for (var i = 0; i < 6; i++) {
      this.rand = this.getRandomInt(0, 3) // get random no for which operation
      this.operation = this.op[this.rand].name // get op name
      this.symbol = this.op[this.rand].symbol // get op symbol for display
      this.a = this.getRandomInt(this.op[this.rand].min, this.op[this.rand].max) // select 2 numbers as
      this.b = this.getRandomInt(this.op[this.rand].min, this.op[this.rand].max) // appropriate to operation
      if (this.rand < 2) { // add or subtract
        this.c = this.a + this.b  // add a and b to calculate c
      }
      else { // multiply or divide
        this.c = this.a * this.b // multiply a and b to calculate c
      }
      if (this.operation == "subtract" || this.operation == "divide") {
        var temp = this.a // swap a and c
        this.a = this.c
        this.c = temp
      }
      this.question.push({
        symbol: this.symbol,
        a: this.a,
        b: this.b,
        c: this.c,
        answer: "",
        icon:  "sentiment_neutral",
        colour: "gray"
      })
    }
    console.log(this.question)
  }
  async checkAnswer() {
    if (this.answer == this.c.toString()) {
      console.log("correct")

      // add a delay here /////////////////////////////
      await this.delay(5000)
      this.answer = ""
      this.test()
    }
    else {
      this.answer = ""
    }
  }
  showArray(){
    console.log("array:", this.question)
    this.correct = 0; // reset counter
    for (var i = 0; i < 6; i++) {
      if(this.question[i].answer == this.question[i].c.toString()){ // correct answer
        this.question[i].icon = "emoji_emotions"
        this.question[i].colour = "green"
        this.correct +=1;
      }
      else if (this.question[i].answer == "") { // unanswered so far
        this.question[i].icon = "sentiment_neutral"
        this.question[i].colour = "gray"
      }
      else { // must be wrong                                        
        this.question[i].icon = "mood_bad"
        this.question[i].colour = "red"
      }
      
    }
    if (this.correct == 6) {
      console.log("correct: ", this.correct)
    }
    
  }
}
