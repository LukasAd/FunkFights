import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { SpellingComponent } from './spelling/spelling.component';
import { MusicquizComponent } from './musicquiz/musicquiz.component';
import { ErrorImageComponent } from './error-image/error-image.component';
import { MemoryComponent } from './memory/memory.component';
import { CardDuelComponent } from './card-duel/card-duel.component';
import { WhenwasthatComponent } from './whenwasthat/whenwasthat.component';
import { SortComponent} from './sort/sort.component';
import { AllPagesComponent} from './all-pages/all-pages.component';
import { ComplexSayingsComponent } from './complex-sayings/complex-sayings.component';


const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'quiz', component: QuizComponent},
  { path: 'home', component: HomeComponent},
  { path: 'brands', component: BrandsComponent},
  { path: 'spelling', component: SpellingComponent},
  { path: 'musicquiz', component: MusicquizComponent},
  { path: 'error-image', component: ErrorImageComponent},
  { path: 'memory', component: MemoryComponent},
  { path: 'card-duel', component: CardDuelComponent},
  { path: 'whenwasthat', component: WhenwasthatComponent},
  { path: 'sort', component: SortComponent},
  { path: 'all-pages', component: AllPagesComponent},
  { path: 'complex-sayings', component: ComplexSayingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
