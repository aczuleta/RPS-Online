import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

import {LadderService} from '../../../services/ladder.service';

import { RankTableComponent } from './rank-table/rank-table.component';
import { RankProfileComponent } from './rank-profile/rank-profile.component';

import { routes } from './leaderboard.routing';

@NgModule({
    declarations: [
    RankTableComponent,
    RankProfileComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes), SharedModule
    ],
    providers: [LadderService]
  })
export default class LeaderboardModule {
}