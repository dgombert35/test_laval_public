import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Shared } from '../../../shared/shared';

import { FlightForm } from '../../../../models/home-page-models/home-page.models';

import { ViewsList } from '../../../../service/datas/home-page-datas/home-page.datas';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.scss']
})
export class LeftPartComponent implements OnInit {

  @Input()
  isDark: boolean;

  @Output()
  emitFlightSearch = new EventEmitter<FlightForm>();

  flightSearchForm: FormGroup;

  viewList: string[] = [];

  viewBySelectedValue: string;
  numbeRegex: string;

  origin = 'origin';
  departureDate = 'departureDate';
  oneWay = 'oneWay';
  duration = 'duration';
  nonStop = 'nonStop';
  maxPrice = 'maxPrice';
  viewBy = 'viewBy';

  constructor(private readonly formBuilder: FormBuilder, private readonly shared: Shared) { }

  ngOnInit() {
    this.viewList = ViewsList;
    this.numbeRegex = this.shared.getNumberRegex();
    this.flightSearchFormConstruction();
  }

  getInvalidInput(id: string): boolean {
    let isInvalid = this.flightSearchForm.get(id).invalid && this.flightSearchForm.get(id).touched;
    return isInvalid;
  }

  searchFlight() {
    if (this.flightSearchForm.valid) {
      this.getFlightSearchResult();
    }
  }

  //TODO add method for keypress only number possibility for duration
  keyPress(event: KeyboardEvent): boolean {
    let isNumber = false;

    if (event.key.match(this.numbeRegex)) {
      isNumber = event.returnValue;
    }
    return isNumber;
  }

  getOneWayValue(): boolean {
    return this.flightSearchForm.get(this.oneWay).value;
  }

  getFlightSearchResult() {
    this.patchValues();
    this.emitFlightSearch.emit(this.flightSearchForm.value);
  }

  //TODO add pattern regex for positive number, non decimal for maxPrice
  private flightSearchFormConstruction() {
    this.flightSearchForm = this.formBuilder.group({
      origin: ['', [Validators.required]],
      departureDate: [''],
      oneWay: [''],
      duration: ['', [Validators.maxLength(2), Validators.pattern(this.numbeRegex)]],
      nonStop: [''],
      maxPrice: ['', [Validators.pattern(this.numbeRegex)]],
      viewBy: [''],
    });
  }

  private patchValues() {
    if (this.flightSearchForm.get(this.oneWay).value === '') {
      this.flightSearchForm.get(this.oneWay).patchValue(false);
    }

    if (this.flightSearchForm.get(this.nonStop).value === '') {
      this.flightSearchForm.get(this.nonStop).patchValue(false);
    }

    if (this.flightSearchForm.get(this.viewBy).value === undefined || this.flightSearchForm.get(this.viewBy).value === '--') {
      this.flightSearchForm.get(this.viewBy).patchValue('');
    }
  }

}
