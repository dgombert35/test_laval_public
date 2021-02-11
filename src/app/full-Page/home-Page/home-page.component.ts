import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HomePageService } from 'src/app/service/https/home-page.service';

import { FlightsDestination } from '../../models/home-page-models/home-page.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  flightsDestinations: FlightsDestination[];

  toggleControl = new FormControl(false);

  isDarkTheme = false;

  constructor(private readonly homePageService: HomePageService) {}

  ngOnInit() {

    localStorage.clear();
    this.homePageService.postLoginsInformations().subscribe();
    this.toggleControl.valueChanges.subscribe((dark) => {
      this.isDarkTheme = dark;
    });
  }

}
