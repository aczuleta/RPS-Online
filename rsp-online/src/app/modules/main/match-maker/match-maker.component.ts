import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {Player, Match, Ruleset} from '../../../models/models.barrel';
import {Store} from "@ngrx/store";
import {AppState} from '../../../reducers';
import {MatchRequested} from '../feature/main.actions';
import { RunningScriptOptions } from 'vm';

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
  private selectedRuleset: Ruleset;

  public rulesets:Array<Ruleset> = [
      new Ruleset(1, "Traditional", null),
      new Ruleset(2, "Extreme", null),
      new Ruleset(3, "For the Lulz", null)
  ];

  constructor(private router:Router, private store:Store<AppState>) {
    this.p1Name = "";
    this.p2Name = ""; 
  }

  ngOnInit() {
  }

  validStart(){
    //console.log("este es el ruleset escogido", this.selectedRuleset);
    let rta = this.p1Name && this.p2Name;
    return rta;
  }  

  startMatch(){
    let p1 = new Player(this.p1Name),
        p2 = new Player(this.p2Name);
    const match = new Match(p1, p2, [], this.selectedRuleset);
    this.store.dispatch(new MatchRequested({match}));
    this.router.navigate(['./match']);
  }

}
