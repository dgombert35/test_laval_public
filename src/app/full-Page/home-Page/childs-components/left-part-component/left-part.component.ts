import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Shared } from '../../../shared/shared';

import { FlightForm } from '../../../../models/home-page-models/home-page.models';

import { ViewsList } from '../../../../service/datas/home-page-datas/home-page.datas';

import * as moment from 'moment';
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

  iotaLInk = 'https://www.iata.org/en/publications/directories/code-search/';
  pleaseIota = 'Please use IOTA code';
  originRequired = 'This field is **required**';
  followIotaLink = `If you don\'t know the IOTA code, please folow this link : \r\r[Link to iota code](${this.iotaLInk})`;
  travelDuration = 'Please enter Exact duration or range of durations of the travel, in days.';
  durationDaysError = 'Duration can not be lower than **1 days or higher than 15 days**';
  maxPriceInformations = 'The value should be a **positive number, without decimals**';
  maxPriceError = 'This value is **not positive** or **contain decimals**';

  dateInferiorDayDate = false;
  dateSuperiorEighteenDays = false;
  isLoading = false;

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

  getInvalidDate(): boolean {

    //-------- Calc of valid date -----------
    let inputDate = moment(this.flightSearchForm.get(this.departureDate).value).format('yyyy-MM-DD');
    let dateOfDay = moment().format('yyyy-MM-DD');

    if(inputDate) {
      (moment(inputDate, 'yyyy-MM-DD').isBefore(dateOfDay)) ? this.dateInferiorDayDate = true : this.dateInferiorDayDate = false;
    }

    //-------- Calc of if date superior 18 days -----------
    let inputDateDateFormat = new Date(inputDate);
    let dayDateFormat = new Date(dateOfDay);
    let timeDiff = inputDateDateFormat.getTime() - dayDateFormat.getTime();
    let daysDiff = timeDiff / (1000 * 3600 * 24);
    (daysDiff > 18) ? this.dateSuperiorEighteenDays = true : this.dateSuperiorEighteenDays = false;



    return this.dateInferiorDayDate || this.dateSuperiorEighteenDays;
  }

  getErrorDateMsg(): string {
    let dateErrorMessage = '';

    if(this.dateSuperiorEighteenDays) {
      dateErrorMessage = 'The date should not be more 18 days from today';
    } else if(this.dateInferiorDayDate) {
      dateErrorMessage = 'The date is invalid';
    }
    return dateErrorMessage;
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

  private flightSearchFormConstruction() {
    this.flightSearchForm = this.formBuilder.group({
      origin: ['', [Validators.required, Validators.maxLength(3)]],
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

    if(this.flightSearchForm.get(this.nonStop).value) {
      let inputDate = moment(this.flightSearchForm.get(this.departureDate).value).format('yyyy-MM-DD');
      this.flightSearchForm.get(this.departureDate).patchValue(inputDate);
    }
  }

}
