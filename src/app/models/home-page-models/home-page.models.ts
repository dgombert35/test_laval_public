
export class FlightForm {
    origin: string;
    departureDate?: string;
    oneWay?: boolean;
    duration?: string;
    nonStop?: boolean;
    maxPrice?: string;
    viewBy?: string;
}

export class IotaCode {
    cityAirport: string;
    code: string;
}

export class GetResponseFlightsDestinationsOrDateFromApi {
    data: FlightsDestination[];
    dictionaries:Dictionnaries;
    meta: Meta;
}

export class Dictionnaries {
    currencies: {
        key: string;
    }
    locations: {
        key: string;
    }
}

export class Meta {
    currency: string;
    links: {self: string;}
    defaults: {
        departureDate: string;
        oneWay: boolean;
        duration: string;
        nonStop: boolean;
        viewBy: string;
    }
}

export class FlightsDestination {
    type: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    price : {
        total: string;
    }
    links: {
        flightDates?: string;
        flightDestinations?: string;
        flightOffers: string;
    }
}