import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css'],
})
export class MovieCardsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allmovies: any = [];
  totalMovies!: number;
  pageSize: number = 20;
  currentPage: number = 1;
  constructor(private myMoviesService: MoviesService) {}
  ngOnInit(): void {
    this.myMoviesService.getAllMovies(this.currentPage).subscribe({
      next: (response) => {
        this.allmovies = response.results;
        this.totalMovies = response.total_results;
      },
    });
  }
  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myMoviesService.getAllMovies(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.allmovies = response.results;
        this.totalMovies = response.total_results;
      },
    });
  }
}
