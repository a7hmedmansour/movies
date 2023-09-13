import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent,
  },
  {
    path: '',
    component: HeaderComponent,
  },
  { path: 'movies', component: MovieCardsComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
