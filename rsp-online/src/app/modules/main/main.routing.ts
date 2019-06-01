// src/app/app.routes.ts
import { Routes } from '@angular/router';
import {MainComponent} from './main.component';
import {MatchComponent} from './match/match.component';
import {ShellComponent} from './shell/shell.component';
import {MatchMakerComponent} from './match-maker/match-maker.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ShellComponent,
                pathMatch: 'full'
            },
            {
                path: 'match-maker',
                component: MatchMakerComponent
            },
            {
                path: 'match',
                component: MatchComponent
            },
            {
                path: 'leaderboards',
                loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.default)
            }
        ]
    }
];