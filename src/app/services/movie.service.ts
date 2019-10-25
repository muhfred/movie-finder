import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) { 
    this.apiKey = '';
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

  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+ searchStr +'&page=1&language=en-US&api_key='+this.apiKey)
      .map(res => res.json());
  }

  getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
            .map(res => res.json());
    }
}
