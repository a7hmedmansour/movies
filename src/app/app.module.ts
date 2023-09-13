import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SliderHeaderComponent } from './slider-header/slider-header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { SwiperModule } from 'swiper/angular';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

// import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MovieCardsComponent,
    FooterComponent,
    MovieDetailsComponent,
    SliderHeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatChipsModule,
    SwiperModule,
    MatPaginatorModule,
    HttpClientModule,
    // SwiperModule,

    // [NgbPaginationModule, NgbAlertModule]
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
