import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private watchlist: any[] = [];
  private apiKey = 'a4ed963f940fd7bf80a96978d9d45480';

  constructor(private http: HttpClient) { }

  addToWatchlist(movie: any) {
    if (!this.watchlist.some(m => m.id === movie.id)) {
      this.getMovieDuration(movie.id).subscribe(duration => {
        movie.duration = duration;
        this.watchlist.push(movie);
      });
    }
  }

 removeFromWatchlist(movie: any) {
    const index = this.watchlist.findIndex(m => m.id === movie.id);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }

  getWatchlist(): any[] {
    return this.watchlist;
  }

  isInWatchlist(movie: any): boolean {
    return this.watchlist.some((m) => m && m.id && m.id === movie.id);
  }

  getMovieDuration(movieId: number): Observable<number> {
    return this.http.get(`${environment.ROOT_URL}movie/${movieId}?api_key=${this.apiKey}`)
      .pipe(
        map((data: any) => {
          return data.runtime;
        })
      );
  }

}
