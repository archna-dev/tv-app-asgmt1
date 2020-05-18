import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvapp } from './itvapp';
import {map} from 'rxjs/operators';

interface ITvdata {
  name: string
  image: {
    medium: string
  },
  schedule: {
    days:string,
    time: number

  },
  genres: string,
  runtime: number,
  summary: string,
  rating: {
    average: number
  },
  _embedded: {
    episodes: [{
          season: number,
          number: number
        }
      ]
    }
  }

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }

  getTvapp(name: string){
    return this.httpClient.get<ITvdata>(
     `${environment.baseUrl}/api.tvmaze.com/singlesearch/shows?q=${name}&embed=episodes&appid=${environment.appId}`).pipe(
       map(data => this.transformToITvapp(data))
     )

  }

  transformToITvapp(data: ITvdata) : ITvapp {
    return {
      image: data.image.medium,
      name: data.name,
      summary: data.summary,
      runtime: data.runtime,
      genres: data.genres,
      rating: data.rating.average,
      schedule: data.schedule.days,
      time: data.schedule.time,
      episodes: data._embedded.episodes[0].number,
      season: data._embedded.episodes[0].season
    }
  }
}
