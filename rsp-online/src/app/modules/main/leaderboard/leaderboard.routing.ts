// src/app/app.routes.ts
import { Routes } from '@angular/router';
import {RankTableComponent} from './rank-table/rank-table.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: RankTableComponent,
                pathMatch: 'full'
            }
        ]
    }
];