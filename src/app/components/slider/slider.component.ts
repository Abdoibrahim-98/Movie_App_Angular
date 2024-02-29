import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  items = [
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    { image: 'https://lumiere-a.akamaihd.net/v1/images/ng_akashinga_laurels_now_url_1adbb20a.jpeg' },
    // Add more items as needed
  ];

  scrollStartX = 0;
  scrollStartScrollX = 0;
  isDragging = false;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.scrollStartX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
    this.scrollStartScrollX = this.sliderContainer.nativeElement.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) {
      return;
    }
    const currentX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
    const deltaX = this.scrollStartX - currentX;
    this.sliderContainer.nativeElement.scrollLeft = this.scrollStartScrollX + deltaX;
    event.preventDefault();
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onDragEnd() {
    this.isDragging = false;
  }
}