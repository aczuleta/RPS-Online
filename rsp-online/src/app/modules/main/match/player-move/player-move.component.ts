import { Component, OnInit } from '@angular/core';
import { Player, Play, Round} from '../../../../models/models.barrel';
import {Store, select} from "@ngrx/store";
import {AppState} from '../../../../reducers';
import { getPlayers, getCurrentPlayer, getCurrentRound, getMoves } from '../../feature/main.selectors';
import { Observable } from 'rxjs';
import { Move } from '../../../../models/move';
import { PlayMade } from '../../feature/main.actions';
import { fade } from '../../../../animations/animations.barrel';


@Component({
  selector: 'player-move',
  templateUrl: './player-move.component.html',
  styleUrls: ['./player-move.component.scss'],
  animations: [fade]
})
export class PlayerMoveComponent implements OnInit {
  public round$:Observable<Round>;
  public currentPlayer$:Observable<Player>;
  public moves$:Observable<Move>;

  constructor(private store:Store<AppState>) {}

  ngOnInit() {
    this.moves$ = this.store.pipe(select(getMoves));

    this.round$ = this.store.pipe(select(getCurrentRound));

    this.currentPlayer$ = this.store.pipe(select(getCurrentPlayer));               
  }

  selectMove(player:Player, move, round:number){
    const play =  new Play(player, move, round);
    this.store.dispatch(new PlayMade({play}));
  }

}
