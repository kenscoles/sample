import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  isMenu = signal<boolean>(false)
}
