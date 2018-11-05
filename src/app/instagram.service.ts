import {Observable} from 'rxjs';
import {Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class InstagramService{
@Input() url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4536554789.0dc7b40.fb494b1d649f4b48ab78b0afcf5bdaa7';

}
