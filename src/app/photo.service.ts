import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Photo } from './photo';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {

  constructor(private http : Http) { }

  getAll() : Observable<Photo[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .map(data => data.json());
  }

  get(id: number) : Observable<Photo> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos/' + id)
      .map(data => data.json());
  }

}
