import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
  standalone: true,
  imports: [DragDropModule, MatCheckboxModule, MatButtonModule, NgIf, NgFor]
})
export class SortingComponent implements OnInit{

  constructor (private util : UtilityService) { }

  ngOnInit(): void {
  this.play();
}

//
correctOrder=false;
myNums:number[] = [];
original:number[]= [];
negatives:boolean = false;
play(){

  this.correctOrder=false;
  this.myNums=[];
  this.original=[];
  while(this.myNums.length < 6){
      if(this.negatives){
        var r = this.util.generateRandomInteger(-20, 20);
      }
      else {
        var r = this.util.generateRandomInteger(1, 40);
      }
      
      if(this.myNums.indexOf(r) === -1) this.myNums.push(r);
  }
  this.original = Array.from(this.myNums); // clone the array
  this.myNums.sort(function(a, b){return a - b}); // return b-a for descending order
  //console.log(`original: ${this.original}`);
  //console.log(`sorted: ${this.myNums}`);
}
includeNegativeNumbers(event:MatCheckboxChange){
  this.negatives = !this.negatives; // toggle
  this.play();
}
//
drop(event: CdkDragDrop<number[]>): void {
  this.correctOrder = true;
  moveItemInArray(this.original, event.previousIndex, event.currentIndex);
  //console.log(`first letter: ${this.myNums[0]}`);
  //
  for (let index = 0; index < this.myNums.length; index++) {
    if (this.myNums[index] !== this.original[index]) {
      this.correctOrder = false;
      break;
    }
  }
  if (this.correctOrder) { 
    // nothing at present   
  }
}
}