import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'b9bae15e57e12b92d717a0db1d58d233';
  constructor(private http: HttpClient) {}
  getAllMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=${pageNumber}`
    );
  }
  getMovieById(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.apiKey}`
    );
  }
  getTrailerMoviebyId(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${this.apiKey}`
    );
  }
  //   searchallMovies(query: string) {
  //     if (query === '') return;
  //     else {
  //       return this.http.get(
  //         `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`
  //       );
  //     }
  //   }
}
