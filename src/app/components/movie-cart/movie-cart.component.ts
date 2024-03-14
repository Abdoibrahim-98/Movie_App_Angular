import { Component, Input } from '@angular/core';
import { MovieListModel } from '@models/movieList.model';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrl: './movie-cart.component.css'
})
export class MovieCartComponent {
 @Input() movies: MovieListModel[];
 @Input() runtime: number;
 @Input() gerners: string[];
}
