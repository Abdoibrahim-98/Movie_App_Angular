import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { WatchlistService } from '../../watchlist.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {

  movies: any[];

  movieLists: Movie[] = [
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
    new Movie('Spiderman','https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',8.5,'Action',2011,139),
  ];

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
