export type AirlineRoute = {
    id: number;
    name: string;
    airport: AirlineRouteAirport;
    routing: string;
    dist_nm: number;
    log: AirlineRouteLog[];
    waypoints_ignored: string;
    notes: string;
    points: number;
    enabled: boolean;
    created_at: string;
    updated_at: string;
    links: AirlineRouteLink[];
};
export type AirlineRouteAirport = {
    departure: AirlineRouteDepartureAirport;
    arrival: AirlineRouteArrivalAirport;
};
export type AirlineRouteDepartureAirport = {
    icao: string;
    iata: string;
    name: string;
    locale: AirlineRouteLocale;
};
export type AirlineRouteLocale = {
    city: string;
    state: any;
    country: string;
    gps: AirlineRouteGps;
};
export type AirlineRouteGps = {
    lat: number;
    lng: number;
};
export type AirlineRouteArrivalAirport = {
    icao: string;
    iata: string;
    name: string;
    locale: AirlineRouteLocale;
};
export type AirlineRouteLog = {
    ident: string;
    freq?: string;
    dist: number;
    coords: string;
    remarks: string;
};
export type AirlineRouteLink = {
    rel: string;
    uri: string;
};
//# sourceMappingURL=AirlineRoute.d.ts.map