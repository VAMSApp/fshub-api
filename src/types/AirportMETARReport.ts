import { Link } from "./Common"

export type AirportMETARReport = {
    icao: string
    iata: string
    name: string
    metar: AirportMETAR
    links: Link[]
}

export type AirportMETAR = {
    error: boolean
    report: string
}