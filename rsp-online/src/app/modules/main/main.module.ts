import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {MainComponent} from './main.component';
import { MatchComponent } from './match/match.component';
import { PlayerMoveComponent } from './match/player-move/player-move.component';
import { SummaryComponent } from './match/summary/summary.component';
import { MatchMakerComponent } from './match-maker/match-maker.component';
import { RulesetMakerComponent } from './ruleset-maker/ruleset-maker.component';
import {ShellComponent} from './shell/shell.component';

import {routes} from './main.routing';
import {matchReducer} from './feature/reducers/match.reducers';
import {roundsReducer} from './feature/reducers/round.reducers';
import {MatchEffects} from './feature/main.effects';


@NgModule({
    declarations: [
        MainComponent,
        MatchComponent,
        PlayerMoveComponent,
        SummaryComponent,
        MatchMakerComponent,
        RulesetMakerComponent,
        ShellComponent
    ],
    imports: [
      CommonModule, RouterModule.forChild(routes), SharedModule,
      StoreModule.forFeature('match', matchReducer),
      StoreModule.forFeature('round', roundsReducer),
      EffectsModule.forFeature([MatchEffects])
    ],
    providers: []
  })
export default class MainModule {
}
  