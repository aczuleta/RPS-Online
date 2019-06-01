import {Action} from '@ngrx/store';
import {Match} from '../../models/models.barrel';


export enum MainActionTypes {
  MatchRequested = '[Main Page] Match Requested'
}


export class MatchRequested implements Action {
  readonly type = MainActionTypes.MatchRequested;
  constructor(public payload: {match:Match}) {}
}


export type MainActions = MatchRequested;




