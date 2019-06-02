import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectMatchState = state => state.match;
export const selectRoundState = state => state.round;

export const getMatch = createSelector(
  selectMatchState,
  matchState => {
      return matchState.match;
  } 
);

export const getPlayers = createSelector(
    getMatch,
    match => {
      let players = [];
      players.push(match.p1);
      players.push(match.p2);
      return players;
    }
);

export const getRounds = createSelector(
  selectMatchState,
  stateMatch => {
    return stateMatch.rounds
  }
);

export const getCurrentPlayer = createSelector(
  selectMatchState,
  matchState => {
    return matchState.currentPlayer
  }
);

export const getCurrentRound = createSelector(
    selectMatchState,
    matchState => {
      return matchState.rounds[matchState.rounds.length - 1];
    }
);

export const isRoundDone = createSelector(
  selectRoundState,
  roundState => {
      return roundState.plays.length === 2;
  } 
);

export const getPlays = createSelector(
    selectRoundState,
    roundState => {
        return roundState.plays;
    } 
);

export const getRound = createSelector(
    selectRoundState,
    roundState => {
        return roundState.round;
    } 
);

export const getRoundState = createSelector(
  selectRoundState,
  roundState => {
      return roundState;
  } 
);

