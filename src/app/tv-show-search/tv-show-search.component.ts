import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { FormControl, Validators} from '@angular//forms';
import { TvService } from '../tv.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  search = new FormControl('', [Validators.minLength(2)]);
  constructor (){ }

  ngOnInit(): void {
    this.search.valueChanges
     .pipe(debounceTime(1000))
      .subscribe((searchValue: string) => {
        if (searchValue && !this.search.invalid){
          this.searchEvent.emit(searchValue)
          // const userInput = searchValue.split(',')
          //                   .map(s => s.trim())
          // this.tvservice.getTvapp(userInput[0]).
          //   subscribe(data => console.log(data))
       }
     }
     )
        }
     }

