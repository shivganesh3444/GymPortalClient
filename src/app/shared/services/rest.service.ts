import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {
  constructor(private http: Http) {
  }

  get(path: string, body: Object = {}) {
    return this.http.get(`${environment.apiEndPoint}${path}`,
    JSON.stringify(body)).pipe(
    map((res: Response) => res.json()));
  }


  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.apiEndPoint}${path}`,
      JSON.stringify(body))
      .pipe(
        map((res: Response) => res.json()));
  }
}
