import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit{
ngOnInit(): void {
  this.play();
}
//
correctOrder=false;
attempts:number = 0;
myNums:number[] = [];
original:number[]= [];
play(){
  this.correctOrder=false;
  this.attempts=0;
  this.myNums=[];
  this.original=[];
  while(this.myNums.length < 6){
      var r = Math.floor(Math.random() * 100) + 1;
      if(this.myNums.indexOf(r) === -1) this.myNums.push(r);
  }
  this.original = Array.from(this.myNums); // clone the array
  
  this.myNums.sort(function(a, b){return a - b}); // return b-a for descending order
  console.log(`original: ${this.original}`);
  console.log(`sorted: ${this.myNums}`);
}
//
drop(event: CdkDragDrop<number[]>): void {
  this.attempts +=1;
  this.correctOrder = true;
  moveItemInArray(this.original, event.previousIndex, event.currentIndex);
  console.log(`first letter: ${this.myNums[0]}`);
  //
  for (let index = 0; index < this.myNums.length; index++) {
    if (this.myNums[index] !== this.original[index]) {
      this.correctOrder = false;
      break;
    }
  }
  if (this.correctOrder) {
    console.log("attempts: " + this.attempts)
    var moves = this.attempts.toString();
    
  }

//
}
}