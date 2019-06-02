import { Component, OnInit, Input } from '@angular/core';
import {Player, Move, Match} from '../../../models/models.barrel';
import {Store, select} from "@ngrx/store";
import {AppState} from '../../../reducers';
import { Observable } from 'rxjs';
import { getMatch, getCurrentPlayer } from '../feature/main.selectors';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  
  private match$:Observable<Match>;


  public completed:boolean = false;
  public player1:Player; 
  public player2:Player;
  public currentPlayer:Player; 

  public winner:Player = new Player("AZ");  
  public moves:Array<Move>;
  private tempMoves = [
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

  public results = [
    {
      number: 1,
      winner: "AZ"
    },
    {
      number: 2,
      winner: "AZ"
    },
    {
      number: 3,
      winner: "SM"
    }
  ];

 

  constructor(private store:Store<AppState>) { 
    this.moves = this.tempMoves;
  }


  ngOnInit() {
  }

 

}
