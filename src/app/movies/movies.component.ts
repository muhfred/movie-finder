import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList : Array<Object>;
  theatersList : Array<Object>;

  constructor(private _movieService: MovieService) {
      this._movieService.getPopular().subscribe(res => {
        this.popularList = res.results;
      });

      this._movieService.getInTheaters().subscribe(res => {
        this.theatersList = res.results;
      });
   }

  ngOnInit() {
  }

}
