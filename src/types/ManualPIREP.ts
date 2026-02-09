export type ManualPIREP = {
    airline: ManualPIREPAirline;
    flight:  ManualPIREPFlight;
}

export type ManualPIREPAirline = {
    id:              number;
    user:            ManualPIREPUser;
    aircraft:        ManualPIREPAircraft;
    airline:         ManualPIREPFlight;
    schedule_status: string|null;
    plan:            ManualPIREPPlan|null;
    departure:       ManualPIREPDeparture;
    arrival:         ManualPIREPArrival;
    distance:        ManualPIREPDistance;
    max:             ManualPIREPMax;
    fuel_burnt:      number;
    geo:             string;
    chart:           string;
    remarks:         string;
    tags:            any|null;
}

export type ManualPIREPAircraft = {
    icao:      string;
    icao_name: string;
    name:      string;
    type:      string;
    user_conf: ManualPIREPUserConf;
}

export type ManualPIREPUserConf = {
    tail: string;
    icao: string;
}

export type ManualPIREPFlight = {
    id:      number;
    owner:   ManualPIREPUser;
    name:    string;
    profile: ManualPIREPFlightProfile;
    handles: ManualPIREPFlightHandles;
}

export type ManualPIREPFlightHandles = {
    website:  string|null;
    twitter:  string|null;
    facebook: string|null;
}

export type ManualPIREPUser = {
    id:        number;
    name:      string;
    email:     string;
    profile:   ManualPIREPUserProfile;
    locations: ManualPIREPLocations;
    handles:   ManualPIREPUserHandles;
    timezone:  string;
    country:   string;
}

export type ManualPIREPUserHandles = {
    website:  string|null;
    twitter:  string|null;
    facebook: string|null;
    vatsim:   string|null;
    ivao:     string|null;
}

export type ManualPIREPLocations = {
    base:   string;
    locale: string;
}

export type ManualPIREPUserProfile = {
    avatar_url: string;
    bio:        string|null;
}

export type ManualPIREPFlightProfile = {
    abbreviation: string;
    bio:          string;
}

export type ManualPIREPArrival = {
    id:           number;
    user:         ManualPIREPUser;
    aircraft:     ManualPIREPAircraft;
    airline:      ManualPIREPFlight;
    plan:         ManualPIREPPlan;
    schedule:     ManualPIREPSchedule;
    airport:      ManualPIREPAirport;
    landing_rate: number;
    pitch:        number;
    bank:         number;
    speed_tas:    number;
    heading:      ManualPIREPHeading;
    wind:         ManualPIREPWind;
    weight:       { [key: string]: number };
    gps:          ManualPIREPGps;
    datetime:     Date;
    arrival_at:   Date;
}

export type ManualPIREPPlan = {
    flight_no: string
    route: string
    callsign: string
    icao_arr: string
    icao_dep: string
    cruise_lvl: number
}

export type ManualPIREPAirport = {
    icao:   string;
    iata:   string;
    name:   string;
    locale: ManualPIREPLocale;
}

export type ManualPIREPLocale = {
    city:    string;
    state:   string|null;
    country: string;
    gps:     ManualPIREPGps;
}

export type ManualPIREPGps = {
    lat: number;
    lng: number;
}

export type ManualPIREPHeading = {
    true:     number;
    magnetic: number;
}

export type ManualPIREPSchedule = {
    status: string|null;
    time:   string|null;
}

export type ManualPIREPWind = {
    speed:     number;
    direction: number;
}

export type ManualPIREPDeparture = {
    id:           number;
    user:         ManualPIREPUser;
    aircraft:     ManualPIREPAircraft;
    airline:      ManualPIREPFlight;
    plan:         ManualPIREPPlan;
    schedule:     ManualPIREPSchedule;
    airport:      ManualPIREPAirport;
    pitch:        number;
    bank:         number;
    speed_tas:    number;
    heading:      ManualPIREPHeading;
    wind:         ManualPIREPWind;
    weight:       { [key: string]: number };
    gps:          ManualPIREPGps;
    datetime:     Date;
    departure_at: Date;
}

export type ManualPIREPDistance = {
    nm: number;
    km: number;
}

export type ManualPIREPMax = {
    alt: number|null;
    spd: number|null;
}
