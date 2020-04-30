import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';



const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'quiz', component: QuizComponent},
  { path: 'home', component: HomeComponent},
  { path: 'brands', component: BrandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
