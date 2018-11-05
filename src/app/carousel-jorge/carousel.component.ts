import { Component, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
import { map} from 'rxjs/operators';
import {Observable, Observer} from 'rxjs';
import 'rxjs/Rx';

@Component ({
  selector: 'app-carousel-jorge',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images2: string [] = [];

  // images = [1,2,3].map(() =>
  // this.data.images.standard_resolution.url.push()
  // );

  // images: string [] = [];

  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4536554789.0dc7b40.fb494b1d649f4b48ab78b0afcf5bdaa7';
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.importData();
    this.getImages();
  }

  ngOnInit() {
  }

  getData() {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }

  // getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  importData() {
    this.getData().subscribe(data => {
      // console.log(data);
      this.data = data;
      console.log(this.data);
    });
  }

  getImages() {
    this.getData().subscribe( data => {
      for (let i = 0; i < 3; i++){
        this.images2[i] = this.data.data[i].images.standard_resolution.url;
        console.log(this.images2[i]);
      }
    });
  }

}
