import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortingComponent } from './sorting/sorting.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingComponent } from './spelling/spelling.component';
import { AnagramsComponent } from './anagrams/anagrams.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    CapitalsComponent,
    SpellingComponent,
    AnagramsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }