import { Component } from '@angular/core';
import { ITvapp, ITvappcast } from './itvapp';
import { TvService } from './tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tv-app';
  tvapp: ITvappcast;

  constructor(private tvService: TvService) {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map((s) => s.trim());
    this.tvService
      .getTvappcast(userInput[0])
      .subscribe((data) => (this.tvapp = data));
  }
}
