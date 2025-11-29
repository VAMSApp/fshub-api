import Airline_getAll from './Airline_getAll';
import Airline_get from './Airline_get';
import Airline_getPilots from './Airline_getPilots';
import Airline_getPilotStats from './Airline_getPilotStats';
import Airline_getFlights from './Airline_getFlights';
import Airline_getAllFlightsDepartures from './Airline_getAllFlightsDepartures';
import Airline_getAllFlightsArrivals from './Airline_getAllFlightsArrivals';
import Airline_getAllFlightDeparturesAndArrivals from './Airline_getAllFlightDeparturesAndArrivals';
import Airline_getAllScreenshots from './Airline_getAllScreenshots';
import Airline_getStats from './Airline_getStats';
import Airline_approveApplication from './Airline_approveApplication';
import Airline_rejectApplication from './Airline_rejectApplication';
import Airline_pilotPointPurchase from './Airline_pilotPointPurchase';
import Airline_getAllRanks from './Airline_getAllRanks';
import Airline_getAllRoles from './Airline_getAllRoles';
import Airline_pilotSetRank from './Airline_pilotSetRank';

export const Airline = {
    getAll: Airline_getAll,
    get: Airline_get,
    getPilots: Airline_getPilots,
    getPilotStats: Airline_getPilotStats,
    getFlights: Airline_getFlights,
    getAllFlightsDepartures: Airline_getAllFlightsDepartures,
    getAllFlightsArrivals: Airline_getAllFlightsArrivals,
    getAllFlightDeparturesAndArrivals: Airline_getAllFlightDeparturesAndArrivals,
    getAllScreenshots: Airline_getAllScreenshots,
    getStats: Airline_getStats, 
    approveApplication: Airline_approveApplication,
    rejectApplication: Airline_rejectApplication,
    pilotPointPurchase: Airline_pilotPointPurchase,
    pilotSetRank: Airline_pilotSetRank,
    getAllRanks: Airline_getAllRanks,
    getAllRoles: Airline_getAllRoles,
}