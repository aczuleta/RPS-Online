// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import {createResult} from './mutations/mutations';
import {getRulesets, getRules} from './queries/queries';


@Injectable({
    providedIn: 'root',
})
export class MatchService {
    constructor(private http: HttpClient, private apollo: Apollo) { }
    
    public sendResult(player1:string, player2:string, winner:string) {
        return this.apollo.mutate({
            mutation: createResult,
            variables: {
                player1,
                player2,
                winner
            }
        }).subscribe(x => {
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }
    
    public getRules(ruleset:number){
        return this.apollo.watchQuery<any>({
            query: getRules
        })
        .valueChanges
        .pipe(
            map(response => response.data),
            tap( x => console.log("esta es la data", x))
        );
    }

    public getRulesets(){
        return this.apollo.watchQuery<any>({
            query: getRulesets
        })
        .valueChanges
        .pipe(
            map(response => response.data),
            tap( x => console.log("esta es la data", x))
        );
    }
}