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
import { SpellingComponent } from './spelling/spelling.component';
import { MusicquizComponent } from './musicquiz/musicquiz.component';
import { ErrorImageComponent } from './error-image/error-image.component';
import { MemoryComponent } from './memory/memory.component';
import { CardDuelComponent } from './card-duel/card-duel.component';
import { WhenwasthatComponent } from './whenwasthat/whenwasthat.component';
import { SortComponent } from './sort/sort.component';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { ComplexSayingsComponent } from './complex-sayings/complex-sayings.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    HomeComponent,
    QuizComponent,
    QuizCategoryComponent,
    GameScoreComponent,
    SpellingComponent,
    MusicquizComponent,
    ErrorImageComponent,
    MemoryComponent,
    CardDuelComponent,
    WhenwasthatComponent,
    SortComponent,
    AllPagesComponent,
    ComplexSayingsComponent,
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
