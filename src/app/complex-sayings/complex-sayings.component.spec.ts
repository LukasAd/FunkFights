import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSayingsComponent } from './complex-sayings.component';

describe('ComplexSayingsComponent', () => {
  let component: ComplexSayingsComponent;
  let fixture: ComponentFixture<ComplexSayingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexSayingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSayingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
