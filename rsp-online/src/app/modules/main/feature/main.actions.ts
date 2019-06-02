import {Action} from '@ngrx/store';
import {Match, Move, Play, Round} from '../../../models/models.barrel';


export enum MainActionTypes {
  MatchRequested = '[Main Page] Match Requested',
  PlayMade = '[Player Move Component] Play Made',
  MatchEvaluationRequested = '[Play Made Effect] Match Evaluation' ,

  RoundPlayMade = '[Player Move Component 2] Play Made',
  RoundEvaluationRequested = '[Play Made Effect] Round Evaluation' ,
  RoundEvaluationMade = '[Round Evaluation Effect] Round Evaluated',
  NewRoundRequested = '[Round Made Effect] New Round Incoming'

}


export class MatchRequested implements Action {
  readonly type = MainActionTypes.MatchRequested;
  constructor(public payload: {match:Match}) {}
}

export class PlayMade implements Action {
  readonly type = MainActionTypes.PlayMade;
  constructor(public payload: {play:Play}) {}
}

export class MatchEvaluationRequested implements Action {
  readonly type = MainActionTypes.MatchEvaluationRequested;
  constructor(public payload: {play:Play}) {}
}

export class RoundPlayMade implements Action {
  readonly type = MainActionTypes.RoundPlayMade;
  constructor(public payload: {play:Play}) {}
}

export class RoundEvaluationRequested implements Action {
  readonly type = MainActionTypes.RoundEvaluationRequested;
  constructor(){}
}

export class RoundEvaluationMade implements Action {
    readonly type = MainActionTypes.RoundEvaluationMade;
    constructor(public payload: {round:Round}) {}
}

export class NewRoundRequested implements Action {
  readonly type = MainActionTypes.NewRoundRequested;
  constructor(public payload: {round:Round}) {}
}


export type MainActions = 
MatchRequested |
PlayMade | 
RoundEvaluationMade |
RoundEvaluationRequested  |
RoundPlayMade |
NewRoundRequested;




