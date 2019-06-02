import { Component, OnInit } from '@angular/core';
import { Player, Play, Round} from '../../../../models/models.barrel';
import {Store, select} from "@ngrx/store";
import {AppState} from '../../../../reducers';
import { getPlayers, getCurrentPlayer, getCurrentRound } from '../../feature/main.selectors';
import { Observable } from 'rxjs';
import { Move } from '../../../../models/move';
import { PlayMade } from '../../feature/main.actions';


@Component({
  selector: 'player-move',
  templateUrl: './player-move.component.html',
  styleUrls: ['./player-move.component.scss']
})
export class PlayerMoveComponent implements OnInit {
  public round$:Observable<Round>;
  public currentPlayer$:Observable<Player>;
  
  public moves = [
    {
      name: "Rock",
      kills: ["Scissor"],
      imageRoute: "https://techtest-aczc.s3-us-west-2.amazonaws.com/RPS/hand-rock.svg"
    }, 
    {
      name: "Paper",
      kills: ["Rock"],
      imageRoute: "https://techtest-aczc.s3-us-west-2.amazonaws.com/RPS/hand-paper.svg" 
    }, 
    {
      name: "Scissor",
      kills: ["Paper"],
      imageRoute: "https://techtest-aczc.s3-us-west-2.amazonaws.com/RPS/hand-scissors.svg"
    }
  ];

  constructor(private store:Store<AppState>) {}

  ngOnInit() {
    this.round$ = this.store.pipe(
        select(getCurrentRound)
    );

    this.currentPlayer$ = this.store.pipe(
      select(getCurrentPlayer)
    );               
  }

  selectMove(player:Player, move, round:number){
    const play =  new Play(player, move, round);
    this.store.dispatch(new PlayMade({play}));
  }

}
