import { Routes } from "@angular/router";
//import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'mastermind', title: 'mastermind',
                loadComponent: () => import('./mastermind/mastermind.component').then(c => c.MastermindComponent)

            },
            {
                path: 'sorting', title: 'sorting',
                loadComponent: () => import('./sorting/sorting.component').then(c => c.SortingComponent)

            },
            {
                path: 'maths', title: 'maths',
                loadComponent: () => import('./maths/maths.component').then(c => c.MathsComponent)

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
                path: 'flags', title: 'flags',
                loadComponent: () => import('./flags/flags.component').then(c => c.FlagsComponent)

            },
            {
                path: 'resizing', title: 'resizing',
                loadComponent: () => import('./resizing/resizing.component').then(c => c.ResizingComponent)

            },
            {
                path: 'menu', title: 'menu',
                loadComponent: () => import('./menu/menu.component').then(c => c.MenuComponent)

            },
            {
                path: 'states', title: 'states',
                loadComponent: () => import('./states/states.component').then(c => c.StatesComponent)

            }
        ]
    }

]