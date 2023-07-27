import { Routes } from "@angular/router";
//import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sorting', title: 'sorting',
                loadComponent: () => import('./sorting/sorting.component').then(c => c.SortingComponent)

            },

            {
                path: 'capitals', title: 'capitals',
                loadComponent: () => import('./capitals/capitals.component').then(c => c.CapitalsComponent)

            },
            {
                path: 'spelling', title: 'spelling',
                loadComponent: () => import('./spelling/spelling.component').then(c => c.SpellingComponent)

            },
            {
                path: 'anagrams', title: 'anagrams',
                loadComponent: () => import('./anagrams/anagrams.component').then(c => c.AnagramsComponent)

            },
            {
                path: 'tables', title: 'tables',
                loadComponent: () => import('./tables/tables.component').then(c => c.TablesComponent)

            },
            {
                path: 'states', title: 'states',
                loadComponent: () => import('./states/states.component').then(c => c.StatesComponent)

            }
        ]
    }

]