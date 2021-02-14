import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { HomePageService } from 'src/app/service/https/home-page.service';

import { FlightsDestination, FlightForm, IotaCode, GetResponseFlightsDestinationsOrDateFromApi } from '../../models/home-page-models/home-page.models';

import { IotaCodeList } from '../../service/datas/home-page-datas/home-page.datas';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  flightsDestinations: FlightsDestination[] = [];
  datesToDestination: FlightsDestination[];

  toggleControl = new FormControl(false);

  iotaCode: IotaCode[];

  backendErrorDetail: string;

  airPlane = '/assets/icons/airplane-travel.png';

  isDarkTheme = false;
  backendErrorResponse = false;
  isFlightDestination = false;

  constructor(private readonly homePageService: HomePageService) {}

  ngOnInit() {

    localStorage.clear();
    this.iotaCode = IotaCodeList;
    this.homePageService.postLoginsInformations().subscribe();
    this.toggleControl.valueChanges.subscribe((dark) => {
      this.isDarkTheme = dark;
    });
  }

  getFlightSearchResults(flightSearch: FlightForm) {

    flightSearch.origin = this.getIotaCode(flightSearch.origin);

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

  private getIotaCode(origin: string): string {
    let iotaCodeOfOrigin = '';
    this.iotaCode.find((iotaCode: IotaCode) => {
      if(origin.toLowerCase() === iotaCode.cityAirport.toLowerCase()) {
        iotaCodeOfOrigin = iotaCode.code;
      }
    });

    return iotaCodeOfOrigin;
  }

}
