import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingComponent } from './spelling/spelling.component';

const routes: Routes = [
  {path: 'sorting', component: SortingComponent},
  {path: 'capitals', component: CapitalsComponent},
  {path: 'spelling', component: SpellingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
