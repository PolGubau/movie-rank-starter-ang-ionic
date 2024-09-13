import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonLabel,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, cashOutline } from 'ionicons/icons';
import { MovieDetails } from '../services/interfaces';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    DatePipe,
    CurrencyPipe,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonItem,
    IonLabel,
    IonIcon,
  ],
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieDetails | null> = signal(null);
  public error: WritableSignal<string | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe(
      (movie) => {
        console.log(movie);
        this.movie.set(movie);
      },
      (error) => {
        this.error.set(error);
      }
    );
  }

  constructor() {
    addIcons({ calendarOutline, cashOutline });
  }
}
