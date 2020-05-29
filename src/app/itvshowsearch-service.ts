import { Observable } from 'rxjs';
import { ITvapp } from './itvapp';

export interface ItvshowsearchService {
  getTvapp(search: string):
  Observable<ITvapp>
}
