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
        console.log('get ITEM', this.localStorage.getItem(this.LS_ACCESS_TOKEN_KEY));
        return this.localStorage.getItem(this.LS_ACCESS_TOKEN_KEY);
    }

    public setAccessToken(token: string): TokenService {
        this.localStorage.setItem(this.LS_ACCESS_TOKEN_KEY, token);
        return this;
    }

    public clear() {
        this.localStorage.removeItem(this.LS_ACCESS_TOKEN_KEY);
        this.localStorage.removeItem(this.LS_REFRESH_TOKEN_KEY);
        this.cookieService.delete(this.LS_ACCESS_TOKEN_KEY);
        this.cookieService.delete(this.LS_REFRESH_TOKEN_KEY);
    }

}
