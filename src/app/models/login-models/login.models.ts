import { Expose } from 'class-transformer';

export interface LoginResponse {
    type: string;
    username: string;
    application_name: string;
    client_id: string;
    token_type: string;
    access_token: string;
    expires_in: number;
    state: string;
    scope: string;
}

export class Token implements LoginResponse {

    @Expose({name: 'type'})
    public type: string;

    @Expose({name: 'username'})
    public username: string;

    @Expose({name: 'application_name'})
    public application_name: string;

    @Expose({name: 'client_id'})
    public client_id: string;

    @Expose({name: 'token_type'})
    public token_type: string;

    @Expose({name: 'access_token'})
    public access_token: string;

    @Expose({name: 'expires_in'})
    public expires_in: number;

    @Expose({name: 'state'})
    public state: string;

    @Expose({name: 'scope'})
    public scope: string;
}
