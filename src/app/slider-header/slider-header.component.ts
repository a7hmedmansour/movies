import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-slider-header',
  templateUrl: './slider-header.component.html',
  styleUrls: ['./slider-header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderHeaderComponent {}
