import { Component } from '@angular/core';

import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amadeus-Test-Project';

  isLoading: boolean;
  isDarkTheme: boolean;

  constructor(private readonly store: Store){}

  ngAfterContentChecked() {
    this.isLoading = this.store.value.isLoading;
    this.isDarkTheme = this.store.value.darkTheme;
  }

}
