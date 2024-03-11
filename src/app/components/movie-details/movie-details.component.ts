  import { Component, OnInit} from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { MovieService } from '../../movie.service';
  import { WatchlistService } from '../../watchlist.service';

  @Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrl: './movie-details.component.css'
  })
  export class MovieDetailsComponent implements OnInit {
    selectedApi:string = 'about';
    saved: Boolean = false;
    sliderValue: number; 
    rateClicked: Boolean = false;
    movieId: number;
    movie: any;
    imgUrl: string;
    backdrop_path: string;
    reviews_info: any[];
    cast: any[];

    constructor(private route: ActivatedRoute, private movieService: MovieService, private watchlistService: WatchlistService){}

      ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
          this.movieId = Number(params.get('id'));
          this.movieService.getMovieDetails(this.movieId).subscribe(data => {
            this.movie = data;
            this.imgUrl = this.movieService.getMovieImageUrl(data.poster_path);
            this.backdrop_path = this.movieService.getMovieImageUrl(data.backdrop_path);
            if(this.watchlistService.isInWatchlist(this.movie)){
              this.movie.saved = true;
            } else{
              this.movie.saved = false;
            }
          });
          this.movieService.getMovieReviews(this.movieId).subscribe(data => {
            this.reviews_info = data.results;
          });
          this.movieService.getMovieCredits(this.movieId).subscribe(data => {
            this.cast = data.cast;
          });
          this.movieService.getUserMovieRating(this.movieId).subscribe((rating: number) => {
            this.sliderValue = rating;
          });
        })
        this.movieService.getSession().subscribe(
          (sessionId: string) => {
            this.movieService.setGuestSessionId(sessionId);
            console.log('Guest session ID:', sessionId);
          });
      }


    toggleWatchlist(event: Event) {
      event.preventDefault();
      if (this.movie) {
        if (this.watchlistService.isInWatchlist(this.movie)) {
          this.watchlistService.removeFromWatchlist(this.movie);
          this.movie.saved = false;
        } else {
          this.watchlistService.addToWatchlist(this.movie);
          this.movie.saved = true;
        }
      }
    }

    get isMovieInWatchlist(): boolean {
      return this.watchlistService.isInWatchlist(this.movie);
    }

    onRatingChange(rating: number) {
      this.movieService.rateMovie(this.movie.id, rating).subscribe(() => {
        setInterval(()=>{
          this.getUserRating();
        },1000)
        console.log('Movie rated successfully');
      });
    }
  
    getUserRating() {
      this.movieService.getUserMovieRating(this.movie.id).subscribe((rating: number) => {
        this.sliderValue = rating;
      });
    }

    onRateClick() {
      this.rateClicked = true;
    }

    onOkClicked() {
      this.rateClicked = false;
    }

    getSliderBarWidth(): string {
      return `calc(${this.sliderValue * 7.5}% - 20px)`;
    }

    getFormattedVoteAverage(): string {
      return this.movie?.vote_average.toFixed(1) || 'N/A';
    }

  }
