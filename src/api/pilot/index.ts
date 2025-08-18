import Pilot_getAll from './Pilot_getAll';
import Pilot_getCurrent from './Pilot_getCurrent';
import Pilot_get from './Pilot_get';
import Pilot_getLatestFlight from './Pilot_getLatestFlight';
import Pilot_getAllFlights from './Pilot_getAllFlights';
import Pilot_getAllAirlines from './Pilot_getAllAirlines';
import Pilot_getStats from './Pilot_getStats';
import Pilot_getAllFlightsDepartures from './Pilot_getAllFlightsDepartures';
import Pilot_getAllFlightsArrivals from './Pilot_getAllFlightsArrivals';
import Pilot_getAllFlightDeparturesAndArrivals from './Pilot_getAllFlightDeparturesAndArrivals';
import Pilot_getAllScreenshots from './Pilot_getAllScreenshots';

export const Pilot = {
    getCurrent: Pilot_getCurrent,
    getAll: Pilot_getAll,
    get: Pilot_get,
    getLatestFlight: Pilot_getLatestFlight,
    getAllFlights: Pilot_getAllFlights,
    getAllAirlines: Pilot_getAllAirlines,
    getStats: Pilot_getStats,
    getAllFlightsDepartures: Pilot_getAllFlightsDepartures,
    getAllFlightsArrivals: Pilot_getAllFlightsArrivals,
    getAllFlightDeparturesAndArrivals: Pilot_getAllFlightDeparturesAndArrivals,
    getAllScreenshots: Pilot_getAllScreenshots,
}