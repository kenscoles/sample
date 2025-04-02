import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
    console.log("State Service started")
   }
 
  showMenuButton = signal<boolean>(false) //  ie the button on app component toolbar
  mobile = signal<boolean>(false)
  test = signal("test signal")
  
}
