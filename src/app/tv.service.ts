import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvapp, ITvappcast } from './itvapp';
import {map, mergeMap} from 'rxjs/operators';

interface ITvdata {
  id: number,
  name: string,
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

  interface ITvcastdata {
    person: {
      name: string
    },
    voice: boolean
  }


@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }

  getTvapp(name: string){
    return this.httpClient.get<ITvdata>(
     `${environment.baseUrl}/api.tvmaze.com/singlesearch/shows?q=${name}&embed=episodes&appid=${environment.appId}`)
     .pipe(
       map(data => this.transformToITvapp(data))
     )
  }

  getTvappcast(name: string){
    return this.httpClient.get<ITvdata>(
      `${environment.baseUrl}/api.tvmaze.com/singlesearch/shows?q=${name}&embed=episodes&appid=${environment.appId}`)
      .pipe(
        mergeMap(data =>
          this.httpClient.get<ITvcastdata[]>(`${environment.baseUrl}/api.tvmaze.com/shows/${data.id}/cast`)
          .pipe(map(data1 => {
            return { one: data, two: data1 }
          }))
        )
      )
      .pipe(
        map(data => this.transformToITvapp2(data.one, data.two))
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

  transformToITvapp2(data: ITvdata, data1: ITvcastdata[]) : ITvappcast {
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
      season: data._embedded.episodes[0].season,
      cast: data1[0].person.name
    }
  }
}
