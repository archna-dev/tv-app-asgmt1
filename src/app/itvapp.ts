export interface ITvapp {
  image: string
  name: string
  summary: string
  runtime: number
  genres: string
  rating: number
  schedule: string
  time: number
  episodes: number
  season: number
}

export interface ITvappcast {
  image: string
  name: string
  summary: string
  runtime: number
  genres: string
  rating: number
  schedule: string
  time: number
  episodes: number
  season: number
  cast: string
}
