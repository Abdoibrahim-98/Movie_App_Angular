import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private watchlist: any[] = [];

  constructor(private http: HttpClient) { }

  addToWatchlist(movie: any) {
    if (!this.watchlist.some(m => m.id === movie.id)) {
      this.getMovieDuration(movie.id).subscribe(duration => {
        movie.runtime = duration;
      });
      this.getMovieGenres(movie.id).subscribe(genres => {
        movie.genres = genres;
      });
      this.watchlist.push(movie);
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

  isInWatchlist(movieId: number): boolean {
    return this.watchlist.some(movie => movie.id === movieId);
}


  getMovieDuration(movieId: number): Observable<number> {
    return this.http.get(`${environment.ROOT_URL}movie/${movieId}?api_key=${environment.apiKey}`)
      .pipe(
        map((data: any) => {
          return data.runtime;
        })
      );
  }

  getMovieGenres(movieId: number): Observable<string[]> {
    return this.http.get(`${environment.ROOT_URL}movie/${movieId}?api_key=${environment.apiKey}`)
      .pipe(
        map((data: any) => {
          return data.genres.slice(0, 2).map((genre: { id: number; name: string; }) => genre.name);
        })
      );
  }

}
