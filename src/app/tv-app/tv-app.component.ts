import { Component, OnInit } from '@angular/core';
import { ITvapp } from '../itvapp';

@Component({
  selector: 'app-tv-app',
  templateUrl: './tv-app.component.html',
  styleUrls: ['./tv-app.component.css']
})
export class TvAppComponent implements OnInit {
  current: ITvapp
  constructor() {
    this.current = {
      show: 'Panchayat',
      cast: 'Neena Gupta',
      rating: 'four star',
      episodes: 8,
      seasons: 1,
      description: 'Simple narration and storyline',
      image: ''

    }

   }

  ngOnInit(): void {
  }

}
