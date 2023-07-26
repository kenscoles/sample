import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import  {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortingComponent } from './sorting/sorting.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingComponent } from './spelling/spelling.component';
import { AnagramsComponent } from './anagrams/anagrams.component';
import { TablesComponent } from './tables/tables.component';
import { StatesComponent } from './states/states.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   // MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    StatesComponent,
    CapitalsComponent,
    TablesComponent,
    SortingComponent,
    AnagramsComponent,
    SpellingComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }