import { Component} from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  selectedApi:string = 'about';
  saved: Boolean = false;
  sliderValue: number = 5; 
  rateClicked: Boolean = false;
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

  onClick(event: Event) {
    event.preventDefault();
    this.saved = !this.saved;
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

}
