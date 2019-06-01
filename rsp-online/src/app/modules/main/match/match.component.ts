import { Component, OnInit, Input } from '@angular/core';
import {Player, Move, Match} from '../../../models/models.barrel';
import {Store, select} from "@ngrx/store";
import {AppState} from '../../../reducers';
import { Observable } from 'rxjs';
import { getMatch } from '../main.selectors';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  
  private match$:Observable<Match>;

  public player1:Player; 
  public player2:Player; 
  
  public moves:Array<Move>;
  private tempMoves = [
    {
      name: "Rock",
      kills: ["Scissor"],
      imageRoute: null
    }, 
    {
      name: "Paper",
      kills: ["Rock"],
      imageRoute: null
    }, 
    {
      name: "Scissor",
      kills: ["Paper"],
      imageRoute: null
    }
  ]

  constructor(private store:Store<AppState>) { 
    this.moves = this.tempMoves;
  }


  ngOnInit() {
      this.match$ = this.store
          .pipe(
              select(getMatch)
          );
  }

 

}
