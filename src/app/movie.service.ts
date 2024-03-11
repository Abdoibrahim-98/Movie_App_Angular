import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'a4ed963f940fd7bf80a96978d9d45480';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGVkOTYzZjk0MGZkN2JmODBhOTY5NzhkOWQ0NTQ4MCIsInN1YiI6IjY1ZGRkYWY3ZWVhMzRkMDE3ZGIyNzYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-2C3lI7BbgX_Fx61rxHQOn6hAG0s3UPStJ7eN_lPo4';
  private guestSessionId: string;

  constructor(private http: HttpClient) { 
    this.getSession();
  }

  setGuestSessionId(guestSessionId:string){
    this.guestSessionId = guestSessionId;
  }

  getSession(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });
  
    return this.http.get(`https://api.themoviedb.org/3/authentication/guest_session/new`, { headers })
      .pipe(
        map((response: any) => {
          this.guestSessionId = response.guest_session_id;
          return response.guest_session_id;
        })
      );
  }

  rateMovie(movieId: number, rating: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const body = { "value": rating };

    return this.http.post(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${this.apiKey}`, body, { headers });
  }

  // getUserMovieRating(movieId: number): Observable<number> {
  //   return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${this.guestSessionId}`)
  //     .pipe(
  //       map((data: any) => {
  //         return data.value;
  //       })
  //     );
  // }
  getUserMovieRating(movieId: number): Observable<number> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGVkOTYzZjk0MGZkN2JmODBhOTY5NzhkOWQ0NTQ4MCIsInN1YiI6IjY1ZGRkYWY3ZWVhMzRkMDE3ZGIyNzYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M-2C3lI7BbgX_Fx61rxHQOn6hAG0s3UPStJ7eN_lPo4'
    });
    return this.http.get(`https://api.themoviedb.org/3/account/21036635/rated/movies?api_key=${this.apiKey}&language=en-US&page=1`, { headers: headers })
      .pipe(
        map((data: any) => {
          const ratedMovie = data.results.find((movie: any) => movie.id === movieId);
          return ratedMovie ? ratedMovie.rating : 0;
        })
      );
  }
  
  getPopularMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`);
  }

  getNowPlayingMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`);
  }

  getMovieImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w500'; // Choose the desired image size (e.g., w500, original, etc.)
    return `${baseUrl}${size}${posterPath}`;
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getMovieReviews(movieId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.apiKey}`);
  }

  getMovieCredits(movieId: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  getMovieGenre(movieId: number): Observable<string[]> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`)
      .pipe(
        map((data: any) => {
          return data.genres.map((genre: any) => genre.name);
        })
      );
  }
  
  getMovieGenresForSearchResults(searchResults: any[]): Observable<string[][]> {
    const observables = searchResults.map(movie => this.getMovieGenre(movie.id));
    return forkJoin(observables);
  }

  getMovieDuration(movieId: number): Observable<number> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`)
      .pipe(
        map((data: any) => {
          return data.runtime;
        })
      );
  }



 
}
