// src/app/app.routes.ts
import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.default)
    }
];