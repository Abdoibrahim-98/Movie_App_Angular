import { Component, Input } from '@angular/core';
import { Movie } from '@models/movie.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
 @Input() movie: Movie;
}
