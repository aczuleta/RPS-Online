// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import {createMove, editMove, createRuleset} from './mutations/mutations';
import {getMoves, getRulesets} from './queries/queries';


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
            alert("Move created succesfully");
            location.reload();
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public editMove(id:number, name:string, imageRoute:string, kills:Array<number>) {
        return this.apollo.mutate({
            mutation: editMove,
            variables: {
                id,
                name,
                imageRoute,
                kills
            }
        }).subscribe(x => {
            alert("Move edited successfully");
            location.reload();
        }, error => {
            console.log("An error ocurred: ", error);
        })
    }

    public getRulesets(){
        return this.apollo.watchQuery<any>({
            query: getRulesets
        })
        .valueChanges
        .pipe(
            map(response => response.data)
        );
    }

    public createRuleset(name:string, moves:Array<number>){
        return this.apollo.mutate({
            mutation: createRuleset,
            variables: {
                name,
                moves
            }
        }).subscribe(x => {
            alert("Ruleset created successfully");
            location.reload();
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
            map(response => response.data)
        );
    }
}