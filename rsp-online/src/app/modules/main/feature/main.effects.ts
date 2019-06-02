import { Injectable } from '@angular/core';
import {Play, Round} from '../../../models/models.barrel';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap, map, concatMap, mergeMap, mapTo, merge, switchMap, withLatestFrom, filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of, Observable, concat} from 'rxjs';
import { PlayMade, MainActionTypes, RoundEvaluationRequested, RoundEvaluationMade, NewRoundRequested } from './main.actions';
import { Store, Action, select } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { RoundPlayMade } from './main.actions';
import { getPlays, isRoundDone, getRoundState, getCurrentRound } from './main.selectors';


@Injectable()
export class MatchEffects {

  @Effect()
  makeRoundPlay$ = this.actions$.pipe(
    ofType<PlayMade>(MainActionTypes.PlayMade),
    map( action => action.payload.play ),
    switchMap( play => {
      return of(new RoundPlayMade({play}));
    }));

  @Effect()
  playMade$ = this.actions$.pipe(
    ofType<RoundPlayMade>(MainActionTypes.RoundPlayMade),
    withLatestFrom(this.store.pipe(select(isRoundDone))),
    filter(([action, finished]) => finished),
    switchMap( () => {
      return of(new RoundEvaluationRequested());
    }));

    @Effect()
    roundEvaluation$ = this.actions$.pipe(
      ofType<RoundEvaluationRequested>(MainActionTypes.RoundEvaluationRequested),
      withLatestFrom(this.store.pipe(select(getRoundState))),
      switchMap( ([action, roundState]) => {
          let play1:Play = roundState.plays[0],
              play2:Play = roundState.plays[1];
          let winner = null;
          //The player who made the first play wins
          if(play1.move.kills.indexOf(play2.move.name) > -1){
            winner = play1.player;
          } 
          //The player who made the second play wins
          else if (play2.move.kills.indexOf(play1.move.name) > -1){
            winner = play2.player;
          }  

        const round:Round = new Round(roundState.round.number, winner);
        return of(new RoundEvaluationMade({round}));
      }));

    @Effect()
    roundFinished$ = this.actions$.pipe(
      ofType<RoundEvaluationMade>(MainActionTypes.RoundEvaluationMade),
      withLatestFrom(this.store.pipe(select(getCurrentRound))),
      switchMap(([action, current])  => {
        console.log("esto es lo que retorna el current", current);
        const round:Round = new Round(current.number + 1, undefined);
        return of(new NewRoundRequested({round}));
      }));
    
  constructor(private actions$: Actions, private router:Router,  private store: Store<AppState>) {}


}
