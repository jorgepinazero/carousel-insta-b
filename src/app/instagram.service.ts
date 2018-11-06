import {map} from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class InstagramService {
  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4536554789.0dc7b40.fb494b1d649f4b48ab78b0afcf5bdaa7';
  data: any = {};

  constructor(public http: Http) {
    this.getData();
    this.importData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }

  importData() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }
}
