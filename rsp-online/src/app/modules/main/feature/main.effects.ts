import { Injectable } from '@angular/core';
import {Play, Round, Player, Ruleset, Move} from '../../../models/models.barrel';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap, map, concatMap, mergeMap, mapTo, merge, switchMap, withLatestFrom, filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of, Observable, concat} from 'rxjs';
import { PlayMade, MainActionTypes, RoundEvaluationRequested, RoundEvaluationMade, NewRoundRequested, MatchCompletionRequested, MatchRequested, RulesetLoaded } from './main.actions';
import { Store, Action, select } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { RoundPlayMade } from './main.actions';
import { getPlays, isRoundDone, getRoundState, getCurrentRound, getPlayers, getMatch, getMatchState } from './main.selectors';
import {MatchService} from '../../../services/match.service';

@Injectable()
export class MatchEffects {

  @Effect()
    matchStart$ = this.actions$.pipe(
      ofType<MatchRequested>(MainActionTypes.MatchRequested),
      mergeMap( action => {
         return this.matchService.getRules(+action.payload.match.ruleset.id)
      }),
      map( rl => {
        let moves:Array<Move> = rl.moves.map(move => {
            return new Move(move.name, [move.kills[0].name], move.imageRoute);
        });
        let ruleset = new Ruleset(rl.idRuleset, rl.rulesetName, moves);
        return new RulesetLoaded({ruleset});
      })
    );

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
          } else if (play2.move.kills.indexOf(play1.move.name) > -1){
            //The player who made the second play wins
            winner = play2.player;
          } else {
            //Otherwise it is a draw.
            winner = new Player("Draw");
          } 
        const round:Round = new Round(roundState.round.number, winner);
        return of(new RoundEvaluationMade({round}));
      }));

    @Effect()
    roundFinished$ = this.actions$.pipe(
      ofType<RoundEvaluationMade>(MainActionTypes.RoundEvaluationMade),
      withLatestFrom(this.store.pipe(select(getCurrentRound))),
      switchMap(([action, current])  => {
        const round:Round = new Round(current.number + 1, undefined);
        return of(new NewRoundRequested({round}));
      }));

    @Effect()
    newRound$ = this.actions$.pipe(
      ofType<NewRoundRequested>(MainActionTypes.NewRoundRequested),
      withLatestFrom(this.store.pipe(select(getPlayers))),
      filter(([action, players]) => {
        return players.some( player => {
          return player.matchStatus.every(x => x);
        })}),
      switchMap( ([action, players]) => {
          const winner = this.selectWinner(players);
          return of(new MatchCompletionRequested({winner}));
      })
    );

    @Effect({dispatch:false})
    matchEnd$ = this.actions$.pipe(
      ofType<MatchCompletionRequested>(MainActionTypes.MatchCompletionRequested),
      withLatestFrom(this.store.pipe(select(getMatchState))),
      tap( ([action, state]) => {
         this.matchService
         .sendResult(state.match.p1.username, state.match.p2.username, action.payload.winner.username); 
      })
    );

  constructor(private actions$: Actions, private router:Router,  
              private store: Store<AppState>, private matchService:MatchService) {}

  selectWinner(players:Array<Player>){
    for(let player of players){
      if(player.matchStatus.every(x => x)) return player;
    }
  }

}
