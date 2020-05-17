import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvapp } from './itvapp';
import {map} from 'rxjs/operators';

interface ITvdata{
  name: string,
  genres: string,
  runtime: number,
  rating:{
      average: number
    },
  image: {
    medium: string
  },
  summary: string
  }

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient: HttpClient) { }

  getTvapp(name: string){
   return this.httpClient.get<ITvdata>(
     `${environment.baseUrl}/api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`).pipe(
       map(data => this.transformToITvapp(data))
     )

  }

  transformToITvapp(data: ITvdata) : ITvapp {
    return {
      name: data.name,
      rating:data.rating.average,
      description: data.summary,
      genres: data.genres,
      runtime: data.runtime,
      image: data.image.medium

    }
  }
}
