export interface Config {
    apiLoginUrl: string;
    client_id: string;
    client_secret: string;
}

export const DevelopmentConfig: Config = {
    apiLoginUrl : 'https://test.api.amadeus.com/v1/',
    client_id: '0Zk9k0tVxcUoaz6pGtIg63Kl32GMVnsz',
    client_secret: 'Yi0nW6H44oDrppYg'
}