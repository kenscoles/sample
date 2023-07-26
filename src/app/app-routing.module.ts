import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingComponent } from './spelling/spelling.component';
import { AnagramsComponent } from './anagrams/anagrams.component';
import { TablesComponent } from './tables/tables.component';
import { StatesComponent } from './states/states.component';

const routes: Routes = [
  {path: 'sorting', component: SortingComponent},
  {path: 'capitals', component: CapitalsComponent},
  {path: 'spelling', component: SpellingComponent},
  {path: 'anagrams', component: AnagramsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'states', component: StatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
