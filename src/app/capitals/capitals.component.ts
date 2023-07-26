import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {NgIf, NgFor} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css'],
  standalone:true,
  imports: [MatButtonModule, MatInputModule, MatSelectModule,
     DragDropModule, NgIf, NgFor]
})
export class CapitalsComponent implements OnInit {

  constructor(private http: HttpClient, private util : UtilityService) { }
  allCountries : any = [];
  countries: any = [];
  names: any = [];
  capitals: any = [];
  correctOrder=false;
  myContinent:string = "";

  ngOnInit(): void {
    this.http.get('assets/countries.json').subscribe(data => {
      this.allCountries = data;
      this.prepareData();
    });
    
  }

  prepareData(){
    this.countries = Array.from(this.allCountries);
    this.correctOrder=false;
    this.util.shuffleArray(this.countries);
   if (this.myContinent !=="") {
    this.countries = this.countries.filter((t: { continent: string; })=>t.continent == this.myContinent);////////
   }
    
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
  onSelected(cont: string) {
    console.log(cont);
    this.myContinent = cont;
    this.prepareData();
  }

}
