import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {

  movies: any[];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.movies = this.watchlistService.getWatchlist();
    console.log(this.movies);
  }

  formatGenres(genres: any[]): string {
    if (!genres) {
      return '';
    }
    return genres.slice(0, 2).map(genre => genre.name).join(', ');
  }
  
}
