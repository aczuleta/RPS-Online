import { Component, OnInit } from '@angular/core';
import { LadderService } from '../../../../services/ladder.service';


@Component({
  selector: 'rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.scss']
})
export class RankTableComponent implements OnInit {

  public displayedColumns: string[] = ['rank', 'player', 'wins'];
  public dataSource$;

  constructor(private ladderService:LadderService) { }

  ngOnInit() {
    this.dataSource$ = this.ladderService.getLadder();
    this.dataSource$.subscribe( x => console.log(x));
  }

}
