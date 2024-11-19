import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../../shared/services/utility.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
  standalone: true,
  imports: [DragDropModule, MatButtonModule]
})
export class StatesComponent implements OnInit {

  states: any = [];
  myStates: any =[];
  names: any = [];
  capitals: any = [];
  correctOrder = false
  
  constructor(private http: HttpClient, private util: UtilityService) { }

  ngOnInit(): void {
    this.http.get('assets/usa_states.json').subscribe(data => {
      this.states = data;
      console.log(this.states)
      this.prepareData()
    });
  }
  prepareData() {
    this.correctOrder = false;
    this.myStates = Array.from(this.states);
    
    this.util.shuffleArray(this.myStates);

    this.names = this.myStates.slice(0, 5);// take first 5
    this.capitals = Array.from(this.names); // clone names array
    this.util.sattoloCycle(this.capitals); // shuffle it
  }
  drop(event: CdkDragDrop<string[]>) {
    this.correctOrder = true;
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    for (let index = 0; index < this.names.length; index++) {
      if (this.names[index].name !== this.capitals[index].name) {
        this.correctOrder = false;
        break;
      }
    }
  }
}
