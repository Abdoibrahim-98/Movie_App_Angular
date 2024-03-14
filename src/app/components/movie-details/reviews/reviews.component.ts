import { Component, Input } from '@angular/core';
import { ReviewResults } from '@models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input() reviews_info: ReviewResults[]; 
}
