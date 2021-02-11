
export class FlightForm {
    origin: string;
    departureDate?: string;
    onWay?: boolean;
    duration?: string;
    nonStop?: boolean;
    maxPrice?: string;
    viewBy?: string;
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
        flightDates: string;
        flightOffers: string;
    }
}