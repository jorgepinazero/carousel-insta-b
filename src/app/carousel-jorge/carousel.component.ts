import {Component, OnInit} from '@angular/core';
import {InstagramService} from '../instagram.service';


@Component ({
  selector: 'app-carousel-jorge',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: string [] = [];

  constructor(public instaService: InstagramService) {
    this.getImages();
  }

  getImages() {
    this.instaService.getData().subscribe( data => {
      for (let i = 0; i < 3; i++) {
        this.images[i] = data.data[i].images.standard_resolution.url;
      }
    });
  }

}
