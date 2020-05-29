import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular//forms';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {
  search = new FormControl();
  constructor (private tvservice: TvService ){}

  ngOnInit(): void {
    this.search.valueChanges
     .subscribe((searchValue: string) => {
       if (searchValue){
         const userInput = searchValue.split(',')
                            .map(s => s.trim())
          this.tvservice.getTvapp(userInput[0]).
            subscribe(data => console.log(data))
       }
     }
     )
        }
     }

