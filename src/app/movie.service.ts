import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = 'a4ed963f940fd7bf80a96978d9d45480';
  
  constructor(private http: HttpClient) { }
  
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
}
