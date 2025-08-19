"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airline = void 0;
var Airline_getAll_1 = __importDefault(require("./Airline_getAll"));
var Airline_get_1 = __importDefault(require("./Airline_get"));
var Airline_getPilots_1 = __importDefault(require("./Airline_getPilots"));
var Airline_getPilotStats_1 = __importDefault(require("./Airline_getPilotStats"));
var Airline_getFlights_1 = __importDefault(require("./Airline_getFlights"));
var Airline_getAllFlightsDepartures_1 = __importDefault(require("./Airline_getAllFlightsDepartures"));
var Airline_getAllFlightsArrivals_1 = __importDefault(require("./Airline_getAllFlightsArrivals"));
var Airline_getAllFlightDeparturesAndArrivals_1 = __importDefault(require("./Airline_getAllFlightDeparturesAndArrivals"));
var Airline_getAllScreenshots_1 = __importDefault(require("./Airline_getAllScreenshots"));
var Airline_getStats_1 = __importDefault(require("./Airline_getStats"));
exports.Airline = {
    getAll: Airline_getAll_1.default,
    get: Airline_get_1.default,
    getPilots: Airline_getPilots_1.default,
    getPilotStats: Airline_getPilotStats_1.default,
    getFlights: Airline_getFlights_1.default,
    getAllFlightsDepartures: Airline_getAllFlightsDepartures_1.default,
    getAllFlightsArrivals: Airline_getAllFlightsArrivals_1.default,
    getAllFlightDeparturesAndArrivals: Airline_getAllFlightDeparturesAndArrivals_1.default,
    getAllScreenshots: Airline_getAllScreenshots_1.default,
    getStats: Airline_getStats_1.default,
};
//# sourceMappingURL=index.js.map