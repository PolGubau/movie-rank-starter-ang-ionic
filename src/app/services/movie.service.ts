import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interfaces';

const API_KEY = environment.apiKey;
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_URL = `${BASE_URL}/movie`;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${MOVIE_URL}/popular?page=${page}&api_key=${API_KEY}`
    );
    // .pipe(delay(1000));
  }
  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${MOVIE_URL}/${id}?api_key=${API_KEY}`);
  }
}
