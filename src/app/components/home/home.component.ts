import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/movie.service';
import { MovieListModel } from '@models/movieList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 selectedApi: string;


  movies: MovieListModel[];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.selectedApi = 'now-playing';
    this.movieService.getNowPlayingMovies().subscribe((data: any) => {
      this.movies = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
      }));
    })
 }

 onGetPopular(){
  this.selectedApi = 'popular';
  this.movieService.getPopularMovies().subscribe((data: any) => {
    this.movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
    }));
  });
 }

 onGetTopRated(){
  this.selectedApi = 'top-rated';
  this.movieService.getTopRatedMovies().subscribe((data: any) => {
    this.movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
    }));
  })
 }
 onGetUpcoming(){
  this.selectedApi = 'upcoming';
  this.movieService.getUpcomingMovies().subscribe((data: any) => {
    this.movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
    }));
  })
 }
 onGetNowPlaying(){
  this.selectedApi = 'now-playing';
  this.movieService.getNowPlayingMovies().subscribe((data: any) => {
    this.movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
    }));
  })
 }
}
