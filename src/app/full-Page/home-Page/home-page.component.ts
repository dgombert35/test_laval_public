import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { HomePageService } from 'src/app/service/https/home-page.service';

import { FlightsDestination,
         FlightForm,
         GetResponseFlightsDestinationsOrDateFromApi } from '../../models/home-page-models/home-page.models';

import { Store } from '../../store/store';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  flightsDestinations: FlightsDestination[] = [];
  datesToDestination: FlightsDestination[];

  toggleControl = new FormControl(false);

  backendErrorDetail: string;

  airPlane = '/assets/icons/airplane-travel.png';

  isDarkTheme = false;
  backendErrorResponse = false;
  isFlightDestination = false;

  constructor(private readonly homePageService: HomePageService, private readonly store: Store) {}

  ngOnInit() {

    localStorage.clear();
    this.homePageService.postLoginsInformations().subscribe();
    this.toggleControl.valueChanges.subscribe((dark) => {
      this.isDarkTheme = dark;
    });
  }

  getFlightSearchResults(flightSearch: FlightForm) {
    this.store.set('isLoading', true);
    if(flightSearch.viewBy != '') {
      flightSearch.viewBy = flightSearch.viewBy.toUpperCase();
    }

    this.homePageService.getFlightsInformations(flightSearch).subscribe((response: GetResponseFlightsDestinationsOrDateFromApi) => {
      this.flightsDestinations = response.data;
      this.backendErrorResponse = false;
      this.isFlightDestination = true;

      if (response instanceof HttpErrorResponse){
        this.backendErrorResponse = true;
        this.isFlightDestination = false;
        this.backendErrorDetail = response.error.errors[0].detail;
       }
    });
  }
}
