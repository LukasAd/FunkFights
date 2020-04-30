import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizCategoryComponent } from './quiz/quiz-category/quiz-category.component';
import { GameScoreComponent } from './game-score/game-score.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    HomeComponent,
    QuizComponent,
    QuizCategoryComponent,
    GameScoreComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    QuizCategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
