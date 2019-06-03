import {Match, Play, Player, Round} from '../../../../models/models.barrel';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MainActions, MainActionTypes} from '../main.actions';
import { match } from 'minimatch';



export interface MatchState {
    started: boolean,
    match: Match,
    currentPlayer: Player,
    rounds: Array<Round>,
    winner: Player,
    done: boolean
}

export const initialMatchState: MatchState = {
    started: false,
    match: new Match(undefined, undefined, [], undefined),
    currentPlayer: null,
    rounds: [new Round(1, undefined)],
    winner: null,
    done: false
};

export function matchReducer(state = initialMatchState , action: MainActions): MatchState {
  switch(action.type) {
    case MainActionTypes.MatchRequested:
     console.log("maldita sea, despacha el request");
      return {
          started: true,
          match: action.payload.match,
          currentPlayer: action.payload.match.p1,
          rounds: [new Round(1, undefined)],
          winner: null,
          done: false
        };
        
    case MainActionTypes.PlayMade: 
       const potentialCurrent = action.payload.play.player;
       const newCurrent =  
       (state.match.p1.username === potentialCurrent.username) ? state.match.p2 : state.match.p1; 
       return {
            started: true,
            match: state.match,
            currentPlayer: newCurrent,
            rounds: state.rounds,
            winner: null,
            done:false
       };
    
    case MainActionTypes.RoundEvaluationMade:
       const newRound = new Round(action.payload.round.number, action.payload.round.winner);  
       const winnerName = newRound.winner ? newRound.winner.username : "";
       let p1 = state.match.p1,
           p2 = state.match.p2;
        let newRounds = [...state.match.rounds];
            newRounds.pop();
            newRounds.push(newRound);
        let match = new Match(state.match.p1, state.match.p2, 
                    newRounds, state.match.ruleset);
       if(winnerName === p1.username){
         let newP1 = new Player(p1.username, updatePlayerWins(p1))
         match.p1 = newP1;
       } else if(winnerName === p2.username) {
         let newP2 = new Player(p2.username, updatePlayerWins(p2))
         match.p2 = newP2;
       } 
       return {
            started: true,
            match: match,
            currentPlayer: state.currentPlayer,
            rounds: match.rounds,
            winner: null,
            done:false
       };
    
    case MainActionTypes.NewRoundRequested:
      const round = action.payload.round;
      const newMatch = new Match(state.match.p1, 
                       state.match.p2, [...state.rounds, round], state.match.ruleset);
      return {
          started: true,
          match: newMatch,
          currentPlayer: newMatch.p1,
          rounds: newMatch.rounds,
          winner: null,
          done:false
      };

    case MainActionTypes.MatchCompletionRequested:
        console.log("vamos a terminar la partida con esta acción", action);
        return {
            started: true,
            match: state.match,
            rounds: [],
            currentPlayer: null,
            winner: action.payload.winner,
            done:true
        }    
    default: 
      return state;
  }
}

function updatePlayerWins(player:Player){
    let matchStatus = [...player.matchStatus];
    for(let i = 0; i < matchStatus.length; i++){
        let current = matchStatus[i];
        if(!current){
            matchStatus[i] = true;
            break;
        }
    }
    return matchStatus
}

function isWinner(player:Player){
    return player.matchStatus.every( x => x);
}








