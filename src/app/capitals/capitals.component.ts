import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent implements OnInit {

  constructor(private http: HttpClient, private util : UtilityService) { }
  countries: any = [];
  names: any = [];
  capitals: any = [];
  correctOrder=false;

  ngOnInit(): void {
    this.http.get('assets/countries.json').subscribe(data => {
      this.countries = data;
      this.prepareData();
    });
  }

  prepareData(){
    this.correctOrder=false;
    this.util.shuffleArray(this.countries);
    this.names = this.countries.slice(0, 5);// take first 5
    this.capitals = Array.from(this.names); // clone names array
    this.util.sattoloCycle(this.capitals); // shuffle it
    console.log(this.countries);
    console.log(this.names);
    console.log(this.capitals);

  }
  //
  drop(event: CdkDragDrop<string[]>) {
    //this.attempts +=1; // increment
    this.correctOrder = true;
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    /* this.todo.forEach((element: any, index: number) => {
      if (element.name !== this.done[index].name) {
        this.correctOrder = false;
      }
    });  cannot use break with forEach */

    for (let index = 0; index < this.names.length; index++) {
      if (this.names[index].name !== this.capitals[index].name) {
        this.correctOrder = false;
        break;
      }
    }
    if (this.correctOrder) {
    console.log("correct!");
    }
    
  }
  //
  
}
