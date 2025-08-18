/**
 * FSHub API Types and type= s
 */

export type Config = {
  baseURL?: string;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>;
};

export type CurrentPilot = Pilot & {
  discord_id?: number
}

export type Pilot = {
  id: number
  name: string
  base: string
  locale: string
  gps: Gps
  is_online: boolean
  online_at: string
  bio?: string
  handles?: Handles
  timezone?: string
  country?: string
  created_at?: string
  links?: Link[]
}

export type Handles = {
  facebook: any
  twitter: string
  website: any
  vatsim: string
  ivao: string
}

export type Link = {
  rel: string
  uri: string
}

export type Gps = {
  lat: number
  lng: number
}

export type FSHubResponse<T> = {
  data: T
}

export type FSHubError = {
  message: string
  code: number
}

export type Flight = {
  id: number
  user: User
  airline: Airline
  schedule_status: any
  aircraft: Aircraft
  plan: any
  fuel_used: number
  landing_rate: number
  distance: Distance
  average: Average
  max: Max
  time: number
  tags: any[]
  flags: any[]
  points: number
  departure: Airport
  arrival: Airport
  links: Link[]
}

export type Airline = {
  id: number
  name: string
  abbr: string
  owner: Owner
  handles: Handles
  links: Link[]
}
export type Owner = {
  id: number
  name: string
  bio: any
  handles: Handles
  base: string
  locale: string
  gps: Gps
  timezone: string
  country: string
  is_online: boolean
  online_at: string
  created_at: string
  links: Link[]
}

export type User = {
  id: number
  name: string
}

export type Aircraft = {
  icao: string
  icao_name: string
  name: string
  type: string
  user_conf: UserConf
}

export type UserConf = {
  tail: string
  icao: string
}

export type Distance = {
  nm: number
  km: number
}

export type Average = {
  spd: number
}

export type Max = {
  alt: number
  spd: number
}

export type Geo = {
  lat: number
  lng: number
}

export type Hdg = {
  mag: number
  true: number
}

export type Spd = {
  tas: number
}

export type Wind = {
  spd: number
  dir: number
}

export type Airport = {
  icao: string
  iata: string
  name: string
  time: string
  geo: Geo
  hdg: Hdg
  spd: Spd
  fuel: number
  pitch: number
  bank: number
  wind: Wind
}

export type FSHubApiInterface = {
  getCurrentPilot: () => Promise<Pilot>
  getAllPilots: () => Promise<Pilot[]>
  getPilot: (id: number) => Promise<Pilot>
  getPilotLatestFlight: (id: number) => Promise<Flight>
}