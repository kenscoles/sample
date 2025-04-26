import { httpResource } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { debouncedSignal } from '../../shared/services/utility.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UtilityService } from '../../shared/services/utility.service';
import { myCode } from '../../country.interface';
import { countryAdapter } from '../../country.adapter';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-country',
  imports: [ CommonModule, FormsModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  template: `
  <div class="container">
<mat-form-field>
<mat-label>enter code</mat-label>      
<input matInput [ngModel]="chosenCode()" (ngModelChange)="chosenCode.set($any($event))">
</mat-form-field>
<mat-form-field>
    <mat-label>pick a country</mat-label>
    <mat-select  [(ngModel)]="selectedValue" (ngModelChange)=" this.chosenCode.set(this.selectedValue)" name="code">
      @for (item of result; track item.code) {
        <mat-option [value]="item.code">{{item.name}}</mat-option>
      }
    </mat-select>
  </mat-form-field>
</div>
<div style="display: inline">
    <div style="width:70%; display: inline-block; float:left; margin-left: 10px; margin-right: 10px;">
   @if(country.isLoading()) {
    <h3>Loading ... please wait</h3>
   }
    @if(country.hasValue()){
@let data = countryData();
<h2>Name: common - {{data.name.common}} <!-- data works -->
native - {{data.name.native}}</h2>
<h2>Capital: {{data.capital.join(", ")}}</h2>
<h2>Independent: @if(data.independent) {YES} @else {NO}
Population: {{data.population | number}}</h2>
<h2>Car: {{data.car.side}} </h2>

<h2>Currency: {{data.currency.name}} ( {{data.currency.symbol}} )</h2>
<h2>Timezone(s): {{data.timezones.join(", ")}}</h2>
@if(data.borders) {
<h2>Border(s): {{data.borders.join(", ")}}</h2>
}
<h2>Language(s): {{data.langs.join(", ")}}</h2>
<p>

} @if(!country.isLoading() && !country.hasValue()) {
  <h3>No country found with this code</h3>
}

    </div>
    <div style="width: 25%; display: inline-block;">
    @if(country.hasValue()){
    <img class="flag" [src]="countryData().flags.svg" />
   
    }  
  </div>
</div>


  `,
  styles: `
  img {
    border: 2px solid;
    margin: 5px;
    width: 30%}

  .container{
    margin: 10px;
    width:40%;
    background-color:light-yellow;
  } 
  .flag {
    width: 100%;
  }
  
  `
})
export class CountryComponent {

  code = signal("GB")
  chosenCode = signal('GB');
  debounceSearchValue = debouncedSignal(this.chosenCode, 2000); // default is 500
  country = httpResource<any>(() => `https://restcountries.com/v3.1/alpha/${this.code()}`);
  codes = httpResource<any>(() => 'https://restcountries.com/v3.1/all?fields=name,cca3')
  selectedValue = "GB"
  result: myCode[] = []
  isCountryListBuilt = false;
  countryData = signal<any | undefined>('')

  private util = inject(UtilityService)

  constructor() {

    effect(() => {
      if (this.country.hasValue()) {
        //console.log("original: ", this.country.value())
        
        const processedData = countryAdapter(this.country.value()[0]) // process the REST api data
        this.countryData.set(processedData)
        //console.log("processed: ", processedData)

        if (!this.isCountryListBuilt) { // get data for and build select list of
          console.log("select now built") // countries and cca3 codes
          this.result = (this.codes.value().map(
            (country: { cca3: string; name: { common: string } }) =>
              ({ code: country.cca3, name: country.name.common })));
          this.util.objsort(this.result, "name", "asc") // sort into alpha order
          this.isCountryListBuilt = true
        }
      }
    })
    effect(() => { // fires when debounceSearchValue changes
      this.code.set(this.debounceSearchValue())
    })
  }



}