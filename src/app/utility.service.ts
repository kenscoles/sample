import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  t(min: number, max: number) {
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }
  //
  getRand(num: number, zeroBased: boolean = true): number {
    if (zeroBased) {
      return Math.floor(num * Math.random());
    }
    else return 1 + Math.floor(num * Math.random());
  }

 generateRandomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random()*(max - min + 1))
  }
  // shuffles to any position in new array
  shuffleArray(array: string[]): string[] {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  // shuffles but position in new array cannot be same as first
  sattoloCycle(items: any): void { // avoids duplication of position in array
    for (var i = items.length; i-- > 1;) {
      var j = Math.floor(Math.random() * i);
      var tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }
  }
  // sorts an array of objects
  objsort(obj: any[], prop: string | number, isAsc: 'asc' | 'desc') {
    console.log('ok')
    return obj.sort((a, b) => a[prop].toString().localeCompare(b[prop])
     * (isAsc === "asc" ? 1 : -1));
  }
  /*
  Remove elements from array at given indices - see below for example
var myArray = ['a','b','c','d','e'];
    var myDeletions = [0,1];
    var newArray = this.removeArrayValues(myArray,myDeletions);
    console.log(newArray)
  */
  removeArrayValues<T>(arr:Array<T>, valArray:Array<number>): T[] {
    valArray = valArray.sort();
     for (var i = valArray.length - 1; i >= 0; i--)
       arr.splice(valArray[i], 1);
 
     return arr;
   }

}
