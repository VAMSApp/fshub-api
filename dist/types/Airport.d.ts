export type Airport = {
    icao: string;
    iata: string;
    name: string;
    locale: AirportLocale;
    geo: AirportGeo;
    alt: number;
    mag_var: number;
    frequencies: AirportFrequencies;
    runways: AirportRunway[];
    links: AirportLink[];
};
export type AirportLocale = {
    city: string;
    state: string;
    county: string;
};
export type AirportGeo = {
    lat: number;
    lng: number;
};
export type AirportFrequencies = {
    atis: string;
    cd: string;
    gnd: string;
    tower: string;
    unicom: string;
    multicom: any;
    app: string;
    dep: string;
};
export type AirportRunway = {
    name: string;
    type: string;
    length: number;
    hdg: number;
    geo: AirportGeo;
    ils: AirportIls;
};
export type AirportIls = {
    id?: string;
    frequency?: string;
    hdg?: number;
    slope?: number;
};
export type AirportLink = {
    rel: string;
    uri: string;
};
//# sourceMappingURL=Airport.d.ts.map