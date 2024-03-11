import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
