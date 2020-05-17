import { Component, OnInit } from '@angular/core';
import { ITvapp } from '../itvapp';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv-app',
  templateUrl: './tv-app.component.html',
  styleUrls: ['./tv-app.component.css']
})
export class TvAppComponent implements OnInit {
  current: ITvapp
  constructor(private tvappservice: TvService) {

   }

  ngOnInit(): void{
   this.tvappservice.getTvapp('westworld').subscribe(data => this.current = data)
  }

}

