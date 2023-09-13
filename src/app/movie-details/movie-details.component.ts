import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  selectedmovie: any;
  detailsmovie: any = [];
  link!: string;
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  keyYoutube: any;

  constructor(
    public route: ActivatedRoute,
    private moviesServ: MoviesService
  ) {}

  ngOnInit(): void {
    let movieId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.moviesServ.getMovieById(movieId).subscribe({
      next: (response) => {
        this.selectedmovie = response;
      },
    });
    this.moviesServ.getTrailerMoviebyId(movieId).subscribe({
      next: (response) => {
        this.detailsmovie = response.results;
        this.link = `https://www.youtube.com/embed/${this.detailsmovie[2].key}`;
        this.keyYoutube = this.detailsmovie[1].key;
      },
    });
  }
}
//pBk4NYhWNMM
