import { Routes } from "@angular/router";
//import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: 'mastermind', title: 'mastermind',
                loadComponent: () => import('./components/mastermind/mastermind.component').then(c => c.MastermindComponent)

            },
            {
                path: 'sorting', title: 'sorting',
                loadComponent: () => import('./components/sorting/sorting.component').then(c => c.SortingComponent)

            },
            {
                path: 'maths2', title: 'maths2',
                loadComponent: () => import('./components/maths2/maths2.component').then(c => c.Maths2Component)

            },
            {
                path: 'capitals', title: 'capitals',
                loadComponent: () => import('./components/capitals/capitals.component').then(c => c.CapitalsComponent)

            },
            {
                path: 'spelling', title: 'spelling',
                loadComponent: () => import('./components/spelling/spelling.component').then(c => c.SpellingComponent)

            },
            {
                path: 'anagrams', title: 'anagrams',
                loadComponent: () => import('./components/anagrams/anagrams.component').then(c => c.AnagramsComponent)

            },
            {
                path: 'tables', title: 'tables',
                loadComponent: () => import('./components/tables/tables.component').then(c => c.TablesComponent)

            },
            {
                path: 'flags', title: 'flags',
                loadComponent: () => import('./components/flags/flags.component').then(c => c.FlagsComponent)

            },
            {
                path: 'menu', title: 'menu',
                loadComponent: () => import('./components/menu/menu.component').then(c => c.MenuComponent)

            },
            {
                path: 'states', title: 'states',
                loadComponent: () => import('./components/states/states.component').then(c => c.StatesComponent)

            },
            {
                path: 'novels', title: 'novels',
                loadComponent: () => import('./components/novels/novels.component').then(c => c.NovelsComponent)

            }
        ]
    }

]