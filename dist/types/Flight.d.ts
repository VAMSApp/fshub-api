import { Airline } from './Airline';
import { Link } from './Common';
export type User = {
    id: number;
    name: string;
};
export type UserConf = {
    tail: string;
    icao: string;
};
export type Aircraft = {
    icao: string;
    icao_name: string;
    name: string;
    type: string;
    user_conf: UserConf;
};
export type Distance = {
    nm: number;
    km: number;
};
export type Average = {
    spd: number;
};
export type Max = {
    alt: number;
    spd: number;
};
export type Geo = {
    lat: number;
    lng: number;
};
export type Hdg = {
    mag: number;
    true: number;
};
export type Spd = {
    tas: number;
};
export type Wind = {
    spd: number;
    dir: number;
};
export type Airport = {
    icao: string;
    iata: string;
    name: string;
    time: string;
    geo: Geo;
    hdg: Hdg;
    spd: Spd;
    fuel: number;
    pitch: number;
    bank: number;
    wind: Wind;
};
export type Flight = {
    id: number;
    user: User;
    airline: Airline;
    schedule_status: any;
    aircraft: Aircraft;
    plan: any;
    fuel_used: number;
    landing_rate: number;
    distance: Distance;
    average: Average;
    max: Max;
    time: number;
    tags: any[];
    flags: any[];
    points: number;
    departure: Airport;
    arrival: Airport;
    links: Link[];
};
//# sourceMappingURL=Flight.d.ts.map