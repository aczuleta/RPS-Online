import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesetMakerComponent } from './ruleset-maker.component';

describe('RulesetMakerComponent', () => {
  let component: RulesetMakerComponent;
  let fixture: ComponentFixture<RulesetMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesetMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesetMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
