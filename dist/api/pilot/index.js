"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
var Pilot_getAll_1 = __importDefault(require("./Pilot_getAll"));
var Pilot_getCurrent_1 = __importDefault(require("./Pilot_getCurrent"));
var Pilot_get_1 = __importDefault(require("./Pilot_get"));
var Pilot_getLatestFlight_1 = __importDefault(require("./Pilot_getLatestFlight"));
var Pilot_getAllFlights_1 = __importDefault(require("./Pilot_getAllFlights"));
var Pilot_getAllAirlines_1 = __importDefault(require("./Pilot_getAllAirlines"));
var Pilot_getStats_1 = __importDefault(require("./Pilot_getStats"));
var Pilot_getAllFlightsDepartures_1 = __importDefault(require("./Pilot_getAllFlightsDepartures"));
var Pilot_getAllFlightsArrivals_1 = __importDefault(require("./Pilot_getAllFlightsArrivals"));
var Pilot_getAllFlightDeparturesAndArrivals_1 = __importDefault(require("./Pilot_getAllFlightDeparturesAndArrivals"));
var Pilot_getAllScreenshots_1 = __importDefault(require("./Pilot_getAllScreenshots"));
exports.Pilot = {
    getCurrent: Pilot_getCurrent_1.default,
    getAll: Pilot_getAll_1.default,
    get: Pilot_get_1.default,
    getLatestFlight: Pilot_getLatestFlight_1.default,
    getAllFlights: Pilot_getAllFlights_1.default,
    getAllAirlines: Pilot_getAllAirlines_1.default,
    getStats: Pilot_getStats_1.default,
    getAllFlightsDepartures: Pilot_getAllFlightsDepartures_1.default,
    getAllFlightsArrivals: Pilot_getAllFlightsArrivals_1.default,
    getAllFlightDeparturesAndArrivals: Pilot_getAllFlightDeparturesAndArrivals_1.default,
    getAllScreenshots: Pilot_getAllScreenshots_1.default,
};
//# sourceMappingURL=index.js.map