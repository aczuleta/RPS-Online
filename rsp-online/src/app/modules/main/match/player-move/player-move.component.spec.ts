import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMoveComponent } from './player-move.component';

describe('PlayerMoveComponent', () => {
  let component: PlayerMoveComponent;
  let fixture: ComponentFixture<PlayerMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
