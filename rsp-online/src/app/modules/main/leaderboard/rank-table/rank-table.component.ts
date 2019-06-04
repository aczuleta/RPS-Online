import { Component, OnInit } from '@angular/core';
import { LadderService } from '../../../../services/ladder.service';
import { fade } from '../../../../animations/animations.barrel';


@Component({
  selector: 'rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.scss'],
  animations: [fade]
})
export class RankTableComponent implements OnInit {

  public displayedColumns: string[] = ['rank', 'player', 'wins'];
  public dataSource$;

  constructor(private ladderService:LadderService) { }

  ngOnInit() {
    this.dataSource$ = this.ladderService.getLadder();
  }


}
