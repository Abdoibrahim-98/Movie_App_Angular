import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CastComponent } from './components/movie-details/cast/cast.component';
import { ReviewsComponent } from './components/movie-details/reviews/reviews.component';
import { DescriptionComponent } from './components/movie-details/description/description.component';
import { MovieCartComponent } from './components/movie-cart/movie-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    SliderComponent,
    SearchComponent,
    FooterComponent,
    WatchListComponent,
    MovieDetailsComponent,
    CastComponent,
    ReviewsComponent,
    DescriptionComponent,
    MovieCartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
