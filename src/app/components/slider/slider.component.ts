import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  items = [
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    // Add more items as needed
  ];

  constructor(private router: Router){}

}