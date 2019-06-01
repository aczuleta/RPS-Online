import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankProfileComponent } from './rank-profile.component';

describe('RankProfileComponent', () => {
  let component: RankProfileComponent;
  let fixture: ComponentFixture<RankProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
