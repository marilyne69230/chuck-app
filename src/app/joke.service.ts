import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokeInterface } from './joke.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<JokeInterface> {
    return this.http.get<JokeInterface>('https://api.chucknorris.io/jokes/random');
  }
}
