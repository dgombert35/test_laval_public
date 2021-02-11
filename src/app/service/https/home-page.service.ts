import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

import { DevelopmentConfig } from '../../config/config';

import { LoginResponse, Token } from '../../models/login-models/login.models';
import { FlightsDestination, FlightForm } from '../../models/home-page-models/home-page.models';

import { TokenService } from '../core/token.service';

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

        return this.http.post<Token>(`${this.configDev.apiLoginUrl}security/oauth2/token`,loginBody, this.getHttpOptionsLogin()).pipe(
            finalize(() => {}),
            tap((tokens: Token) => this.saveAccessData(tokens)),
            catchError((error) => {
              return of(error.status);
            })
        );
    }

    getFlightsInformations(flightForm: FlightForm): Observable<FlightsDestination[]> {
        return this.http.get<FlightsDestination[]>(`${this.configDev.apiLoginUrl}shopping/flight-destinations?
        origin=${flightForm.origin}
        &departureDate=${flightForm.departureDate}
        &oneWay=${flightForm.onWay}
        &duration=${flightForm.duration}
        &nonStop=${flightForm.nonStop}
        &maxPrice=${flightForm.maxPrice}
        &viewBy=${flightForm.viewBy}`, this.getHttpOptionsUser()).pipe(
            finalize(() => {}),
            tap(() => {}),
            catchError((error) => {
              return of(error.status);
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
        let token_id = this.tokenService.getAccessToken();
        console.log(token_id);
        let httpOptionsLogin = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token_id}`
            })
        };
        return httpOptionsLogin;
    }

    private saveAccessData(tokens) {
        this.tokenService.setAccessToken(tokens.accessToken).setRefreshToken(tokens.refreshToken);
    }


}
