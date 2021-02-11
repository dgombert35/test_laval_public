import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {

    private readonly LS_ACCESS_TOKEN_KEY = 'amadeus_access_token';
    private readonly LS_REFRESH_TOKEN_KEY = 'amadeus_refresh_token';

    constructor(private readonly localStorage: LocalStorage, private readonly cookieService: CookieService) {
    }

    public getAccessToken(): Observable<unknown> {
        return this.localStorage.getItem(this.LS_ACCESS_TOKEN_KEY);
    }

    public getRefreshToken(): Observable<unknown> {
        return this.localStorage.getItem(this.LS_REFRESH_TOKEN_KEY);
    }

    public setAccessToken(token: string): TokenService {
        this.localStorage.setItem(this.LS_ACCESS_TOKEN_KEY, token);
        this.cookieService.set(this.LS_ACCESS_TOKEN_KEY, token, 1 / 24); // 1 hour
        return this;
    }

    public setRefreshToken(token: string): TokenService {
        this.localStorage.setItem(this.LS_REFRESH_TOKEN_KEY, token);
        this.cookieService.set(this.LS_REFRESH_TOKEN_KEY, token, 14); // 14 days
        return this;
    }

    public clear() {
        this.localStorage.removeItem(this.LS_ACCESS_TOKEN_KEY);
        this.localStorage.removeItem(this.LS_REFRESH_TOKEN_KEY);
        this.cookieService.delete(this.LS_ACCESS_TOKEN_KEY);
        this.cookieService.delete(this.LS_REFRESH_TOKEN_KEY);
    }

}
