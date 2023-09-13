import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHeaderComponent } from './slider-header.component';

describe('SliderHeaderComponent', () => {
  let component: SliderHeaderComponent;
  let fixture: ComponentFixture<SliderHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderHeaderComponent]
    });
    fixture = TestBed.createComponent(SliderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
