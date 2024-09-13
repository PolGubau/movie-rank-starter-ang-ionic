import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_KEY = environment.apiKey;
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_URL = `${BASE_URL}/movie`;

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() {}

  getTopRatedMovies(page = 1) {
    return this.http.get(
      `${MOVIE_URL}/popular?page=${page}&api_key=${API_KEY}`
    );
  }
  getMovieDetails(id: string) {
    return this.http.get(`${MOVIE_URL}/${id}?api_key=${API_KEY}`);
  }
}
