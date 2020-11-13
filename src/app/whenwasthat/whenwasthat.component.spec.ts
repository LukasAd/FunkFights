import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenwasthatComponent } from './whenwasthat.component';

describe('WhenwasthatComponent', () => {
  let component: WhenwasthatComponent;
  let fixture: ComponentFixture<WhenwasthatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenwasthatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenwasthatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle gameStart boolean', () => {
    component.startGameBool = true;
    component.startGame();
    expect(component.startGameBool).toBe(false);
  })

  it('should update toleranceLevel', () => {
    component.toleranceLevel = 4;

    //increase toleranceLevel by 1
    component.updateTolerance(true);
    expect(component.toleranceLevel).toBe(5);

    //do not increase toleranceLevel above level 5
    component.updateTolerance(true);
    expect(component.toleranceLevel).toBe(5);

    //decrease toleranceLevel
    component.updateTolerance(false);
    expect(component.toleranceLevel).toBe(4);

    //do not decrease toleranceLevel below level 0
    component.toleranceLevel = 0;
    component.updateTolerance(false);
    expect(component.toleranceLevel).toBe(0);
  })
});
