// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {playerSummaries} from './queries/queries';
import gql from 'graphql-tag';


@Injectable({
    providedIn: 'root',
})
export class LadderService {
    constructor(private http: HttpClient, private apollo: Apollo) { }
    public getLadder():Observable<any> {
        return this.apollo.watchQuery<any>({
            query: playerSummaries
          })
          .valueChanges
          .pipe(
            map(response => response.data)
          );
    }
}