import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDuelComponent } from './card-duel.component';

describe('CardDuelComponent', () => {
  let component: CardDuelComponent;
  let fixture: ComponentFixture<CardDuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
