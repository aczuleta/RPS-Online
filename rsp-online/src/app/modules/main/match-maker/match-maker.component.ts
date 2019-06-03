import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {Player, Match, Ruleset} from '../../../models/models.barrel';
import {Store} from "@ngrx/store";
import {AppState} from '../../../reducers';
import {MatchRequested} from '../feature/main.actions';
import { RunningScriptOptions } from 'vm';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'match-maker',
  templateUrl: './match-maker.component.html',
  styleUrls: ['./match-maker.component.scss']
})
export class MatchMakerComponent implements OnInit {

  public p1Name:string;
  public p2Name:string;

  private p1:Player;
  private p2:Player;
  private selectedRuleset: number = null;
  public rulesets$;

  constructor(private router:Router, private store:Store<AppState>, private matchService:MatchService) {
    this.p1Name = "";
    this.p2Name = ""; 
  }


  ngOnInit() {
    this.rulesets$ = this.matchService.getRulesets();
  }

  validStart(){
    //console.log("este es el ruleset escogido", this.selectedRuleset);
    let rta = this.p1Name && this.p2Name && this.selectedRuleset;
    return rta;
  }  

  startMatch(){
    let p1 = new Player(this.p1Name),
        p2 = new Player(this.p2Name);
    const match = new Match(p1, p2, [], new Ruleset(this.selectedRuleset, "", null));
    this.store.dispatch(new MatchRequested({match}));
    this.router.navigate(['./match']);
  }

}
