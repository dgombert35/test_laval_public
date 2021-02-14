import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FlightsDestination } from '../../../../models/home-page-models/home-page.models';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.scss']
})
export class RightPartComponent implements OnInit {

  @Input()
  flightsResult: FlightsDestination[];

  @Output()
  emitGetFlightsDetails = new EventEmitter<string>();

  datesDetailsFlight = [];

  isDeploy = false;

  constructor() { }

  ngOnInit() {

  }

  showDetailsFlight(link: string) {
    this.isDeploy = !this.isDeploy;
    this.emitGetFlightsDetails.emit(link);
  }

}
