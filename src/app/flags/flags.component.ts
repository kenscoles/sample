import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from '../utility.service';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag,
    MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  allCountries: any;
  countries: any = [];
  myCountries: any = [];
  myFlags: any = [];
  correctOrder = false;
  myContinent = ""
  caps: boolean = false;
  startup = true;

  constructor(private util: UtilityService, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('assets/countries.json').subscribe((data: any) => {
      this.allCountries = data;
      this.allCountries = this.allCountries.filter((t: { include: string; }) => t.include == "y");////////
      console.log(this.allCountries)
      this.correctOrder=true // just at start up
    });
  
  }

  setup() {
    this.startup = false // 
    this.caps = false;
    this.correctOrder = false;
    this.countries = Array.from(this.allCountries)
    if (this.myContinent !== "") {
      this.countries = this.countries.filter((t: { continent: string; }) => t.continent == this.myContinent);////////
    }
    this.countries = this.util.shuffleArray(this.countries)
    this.countries = this.countries.slice(0, 5)
    //console.log(this.countries)
    this.myCountries = []; //make sure empty
    for (let i = 0; i < this.countries.length; i++) { // create array with all data
      this.myCountries.push(
        {
          "name": this.countries[i].name,
          "capital": this.countries[i].capital,
          "url": "https://flagcdn.com/112x84/" + this.countries[i].code.toLowerCase() + ".png"
        })
    }

    this.myFlags = [];
    this.myFlags = Array.from(this.myCountries)
    this.util.sattoloCycle(this.myFlags)
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.correctOrder = true;
    for (let index = 0; index < this.myCountries.length; index++) {
      if (this.myCountries[index].name !== this.myFlags[index].name) {
        this.correctOrder = false;
        break;
      }
    }
  }

  onSelected(cont: string) {
    console.log(cont);
    this.myContinent = cont;

    this.setup();
  }
  showCapitals() {
    this.caps = true
  }
}

