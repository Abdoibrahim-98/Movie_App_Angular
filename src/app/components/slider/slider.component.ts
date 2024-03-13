import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '@services/movie.service';
import { MovieListModel } from '@models/movieList.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  movies: MovieListModel[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data: any ) => {
      this.movies = data.results.map((movie: any) => ({
        id: movie.id,
        poster_path: this.movieService.getMovieImageUrl(movie.poster_path)
      }));
    })
  }

}