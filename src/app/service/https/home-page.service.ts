import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, filter, finalize, map, tap } from 'rxjs/operators';

import { DevelopmentConfig } from '../../config/config';

import { Token } from '../../models/login-models/login.models';
import { FlightForm, GetResponseFlightsDestinationsOrDateFromApi } from '../../models/home-page-models/home-page.models';

import { TokenService } from '../core/token.service';
import { plainToClass } from 'class-transformer';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {

    configDev = DevelopmentConfig;

    constructor(private readonly http: HttpClient, private readonly tokenService: TokenService){}


    postLoginsInformations(): Observable<Token> {

        const loginBody = new HttpParams()
        .set('grant_type', 'client_credentials')
        .set('client_id', this.configDev.client_id)
        .set('client_secret', this.configDev.client_secret);

        return this.http.post<HttpResponse<Token>>(`${this.configDev.apiLoginUrl}security/oauth2/token`,loginBody, this.getHttpOptionsLogin()).pipe(
            finalize(() => {}),
            map((response) => {
                return plainToClass(Token, response.body);
            }),
            tap((tokens: Token) => this.saveAccessData(tokens)),
            catchError((error) => {
              return of(error);
            })
        );
    }

    getFlightsInformations(flightForm: FlightForm): Observable<GetResponseFlightsDestinationsOrDateFromApi> {
        let params = new HttpParams();

        if(flightForm.departureDate) {
            params = params.set('departureDate', flightForm.departureDate);
        }

        if(flightForm.duration) {
            params.append('duration', flightForm.duration);
        }

        if(flightForm.maxPrice) {
            params = params.set('maxPrice', flightForm.maxPrice);
        }

        if(flightForm.viewBy) {
            params = params.append('viewBy', flightForm.viewBy);
        }

        const options = { params: params, headers: this.getHttpOptionsUser() };

        return this.http.get<HttpResponse<GetResponseFlightsDestinationsOrDateFromApi>>(`${this.configDev.apiLoginUrl}shopping/flight-destinations?origin=${flightForm.origin}&oneWay=${flightForm.oneWay}&nonStop=${flightForm.nonStop}`, options).pipe(
            finalize(() => {}),
            map(flighDestinations => {return flighDestinations}),
            catchError((error) => {
              return of(error);
            })
        );
    }

    private getHttpOptionsLogin(): {}{
        let httpOptionsLogin = {
            headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' }),
            observe: <'body'>'response'
        };
        return httpOptionsLogin;
    }

    private getHttpOptionsUser(): {}{
       /*  this.tokenService.getAccessToken().pipe(
            map(token => console.log('TOEKN', token)),
        ).subscribe(res => console.log('res', res)); */
        let token_id = localStorage.getItem('token_id');
        let headers = new HttpHeaders({
            'Authorization': `Bearer ${token_id}`
        });
        return headers;
    }

    private saveAccessData(tokens: Token) {
        localStorage.setItem('token_id', tokens.access_token);
        //this.tokenService.setAccessToken(tokens.access_token);
    }
}
