import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 selectedApi: string = 'new-playing';
 items = [
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
  // Add more items as needed
];
}
