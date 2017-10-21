import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhotoService {

  constructor(private http : Http) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  get(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }

}
