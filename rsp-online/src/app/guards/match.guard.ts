import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isMatchStarted } from '../modules/main/feature/main.selectors';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CanMatch implements CanActivate {
    
    constructor(private router: Router, private store:Store<AppState>){}

    canActivate(route:ActivatedRouteSnapshot, 
    state:RouterStateSnapshot):Observable<boolean> | boolean{
        return this.store.pipe(select(isMatchStarted))
               .pipe(
                   map(x => {
                        if(x) return x;
                        else {
                            this.router.navigate(["/"]);
                            return x;
                        }
                   })
               );
    }
}