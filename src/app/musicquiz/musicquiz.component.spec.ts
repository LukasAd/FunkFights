import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicquizComponent } from './musicquiz.component';

describe('MusicquizComponent', () => {
  let component: MusicquizComponent;
  let fixture: ComponentFixture<MusicquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
