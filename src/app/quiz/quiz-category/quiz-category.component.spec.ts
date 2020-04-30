import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryComponent } from './quiz-category.component';

describe('QuizCategoryComponent', () => {
  let component: QuizCategoryComponent;
  let fixture: ComponentFixture<QuizCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
