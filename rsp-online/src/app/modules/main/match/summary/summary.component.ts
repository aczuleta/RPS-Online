import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Round } from '../../../../models/models.barrel';
import { AppState } from '../../../../reducers';
import { Store, select } from '@ngrx/store';
import { getRounds } from '../../feature/main.selectors';
import { fade } from '../../../../animations/animations.barrel';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [fade]
})
export class SummaryComponent implements OnInit {

  public rounds$:Observable<Round>;
  
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.rounds$ = this.store.pipe(
      select(getRounds)
    )
  }

}
