// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import {createMove, createRuleset} from './mutations/mutations';
import {getMoves} from './queries/queries';


@Injectable({
    providedIn: 'root',
})
export class RulesetService {
    constructor(private http: HttpClient, private apollo: Apollo) { }

    public createMove(name:string, imageRoute:string, kills:Array<number>) {
        return this.apollo.mutate({
            mutation: createMove,
            variables: {
                name,
                imageRoute,
                kills
            }
        }).subscribe(x => {
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public createRuleset(name:string, moves:Array<number>){
        return this.apollo.mutate({
            mutation: createRuleset,
            variables: {
                name,
                moves
            }
        }).subscribe(x => {
            console.log(x)
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public getMoves(){
        return this.apollo.watchQuery<any>({
            query: getMoves
        })
        .valueChanges
        .pipe(
            map(response => response.data),
            tap( x => console.log("esta es la data", x))
        );
    }
}