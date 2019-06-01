import {Match} from '../../models/models.barrel';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MainActions, MainActionTypes} from './main.actions';


export interface MatchState {
    started: boolean,
    match: Match
}

export const initialMatchState: MatchState = {
    started: false,
    match: undefined
};

export function matchReducer(state = initialMatchState , action: MainActions): MatchState {
  switch(action.type) {
    case MainActionTypes.MatchRequested:
      return {
          started: true,
          match: action.payload.match
        };
    default: 
      return state;
  }
}








