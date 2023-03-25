import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  myString:string = "";
  update():void {
    this.myString = "You clicked the button";
  }
  clearText():void{
    this.myString = "";
  }
}
