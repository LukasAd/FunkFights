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
});
