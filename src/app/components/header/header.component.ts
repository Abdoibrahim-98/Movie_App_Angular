import { Component, Input } from '@angular/core';
import { Movie } from '@models/movie.model';
import { WatchlistService } from '@services/watchlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Input() page: string;
    @Input() movieId: number;
    @Input() movie: Movie;
    
    constructor(private watchListService: WatchlistService){}

    toggleWatchlist(event: Event) {
      event.preventDefault();
      if (this.movie) {
        if (this.watchListService.isInWatchlist(this.movie.id)) {
          this.watchListService.removeFromWatchlist(this.movie);
          this.movie.saved = false;
        } else {
          this.watchListService.addToWatchlist(this.movie);
          this.movie.saved = true;
        }
      }
    }

    get isMovieInWatchlist(): boolean {
      return this.watchListService.isInWatchlist(this.movie?.id || 0);
  }
}
