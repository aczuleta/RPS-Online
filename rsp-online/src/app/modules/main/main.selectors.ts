import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectMatchState = state => state.match;


export const getMatch = createSelector(
  selectMatchState,
  matchState => {
      return matchState.match;
  } 
);

