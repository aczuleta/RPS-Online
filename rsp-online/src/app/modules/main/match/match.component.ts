import { Component, OnInit, Input } from '@angular/core';
import {Player, Move, Match} from '../../../models/models.barrel';
import {Store, select} from "@ngrx/store";
import {AppState} from '../../../reducers';
import { Observable } from 'rxjs';
import { getMatch, getCurrentPlayer, isMatchOver, getMatchWinner } from '../feature/main.selectors';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  
  private match$:Observable<Match>;
  public completed$:Observable<boolean>;
  public winner$:Observable<Player>;  
 
  constructor(private store:Store<AppState>){ }
  
  ngOnInit() {
    this.completed$ = this.store.pipe(select(isMatchOver));
    this.winner$ = this.store.pipe(select(getMatchWinner));
  }

 

}
