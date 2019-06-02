import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {Store} from "@ngrx/store";
import {AppState} from '../../reducers';
import {MatchRequested} from './feature/main.actions';


@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router:Router, private store:Store<AppState>) {
  }

  ngOnInit() {
  }


}
