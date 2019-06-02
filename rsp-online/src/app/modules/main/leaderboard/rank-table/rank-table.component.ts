import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: any[] = [
  {rank: 1, username: 'Hydrogen', wins : 4, losses: 0 },
];

@Component({
  selector: 'rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.scss']
})
export class RankTableComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'player', 'wins', 'losses'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    
  }

}
