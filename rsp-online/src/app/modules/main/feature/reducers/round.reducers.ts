import {Match, Play, Player, Round} from '../../../../models/models.barrel';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MainActions, MainActionTypes} from '../main.actions';


export interface RoundState {
    round: Round,
    plays: Array<Play>,
    winner: Player
}

export const initialRoundState: RoundState = {
    round: new Round(1, undefined),
    plays: [],
    winner: undefined
};

export function roundsReducer(state = initialRoundState , action: MainActions): RoundState {
  switch(action.type) {
    case MainActionTypes.RoundEvaluationRequested:
      return {
          round: state.round,
          plays: state.plays,
          winner: undefined
        };
    case MainActionTypes.RoundEvaluationMade:
        return {
            round: action.payload.round,
            plays: [],
            winner: action.payload.round.winner
          };
     
    case MainActionTypes.NewRoundRequested:
          return {
              round: action.payload.round,
              plays: [],
              winner: undefined
            };
    case MainActionTypes.RoundPlayMade:  
       const newPlays = [...state.plays, action.payload.play];
       return {
            round: state.round,
            plays: newPlays,
            winner: undefined
       };
    default: 
      return state;
  }
}








