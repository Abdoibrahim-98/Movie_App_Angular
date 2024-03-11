import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Movie } from '../../movie.model';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  @ViewChild('searchInput') searchInputRef!: ElementRef;
  movies: any[]= [];
  query: string = '';

  constructor(private movieService: MovieService){}
  
  ngOnInit(): void {
    setTimeout(() => {
      this.searchInputRef.nativeElement.focus();
    });
  }

  onSearch(){
    if (this.query.trim() !== '') {
      this.movieService.searchMovies(this.query).subscribe(data => {
        this.movies = data.results;
        console.log(data);
        this.movieService.getMovieGenresForSearchResults(this.movies).subscribe(genres => {
          this.movies.forEach((movie, index) => {
            movie.genres = genres[index]; 
          });
        });
        this.movies.forEach(movie => {
          this.movieService.getMovieDuration(movie.id).subscribe(duration => {
            movie.duration = duration;
          });
        });
      });
    }
  }

}
