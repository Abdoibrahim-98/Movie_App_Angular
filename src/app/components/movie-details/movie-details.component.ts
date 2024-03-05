import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  selectedApi:string = 'cast';
  saved: Boolean = false;
  items = [
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    { image: 'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011560165.jpg' },
    // Add more items as needed
  ];

  onClick(event: Event){
    event.preventDefault();
    this.saved = !this.saved;
  }
}
