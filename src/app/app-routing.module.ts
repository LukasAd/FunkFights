import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { SpellingComponent } from './spelling/spelling.component';
import { MusicquizComponent } from './musicquiz/musicquiz.component';
import { ErrorImageComponent } from './error-image/error-image.component';



const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'quiz', component: QuizComponent},
  { path: 'home', component: HomeComponent},
  { path: 'brands', component: BrandsComponent},
  { path: 'spelling', component: SpellingComponent},
  { path: 'musicquiz', component: MusicquizComponent},
  { path: 'error-image', component: ErrorImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
