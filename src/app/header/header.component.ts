import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private searchValue: string = 'Ahmed';
  constructor() {
    console.log(this.searchValue);
  }
  set setsearchvalue(search: string) {
    this.searchValue = search;
    console.log(this.searchValue);
  }
}
