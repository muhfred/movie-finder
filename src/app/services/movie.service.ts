import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) { 
    this.apiKey = '035f9514bf47da66ee88b44df83f9b88';
    console.log('movie service initialized...');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/popular?callback=JSONP_CALLBACK&page=1&language=en-US&api_key='+this.apiKey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/now_playing?callback=JSONP_CALLBACK&page=1&language=en-US&api_key='+this.apiKey)
      .map(res => res.json());
  }
}
