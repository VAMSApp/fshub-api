"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var index_1 = __importDefault(require("./index"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var api;
(0, mocha_1.describe)('FSHubApi()', function () {
    var apiKey;
    (0, mocha_1.before)(function () {
        if (!process.env.FSHUB_API_KEY) {
            throw new Error('FSHUB_API_KEY is not set in .env file');
        }
        apiKey = process.env.FSHUB_API_KEY;
        api = new index_1.default({ apiKey: apiKey });
    });
    it('when instantiated with valid data, it should return an FSHubApi object with the expected class methods', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, chai_1.expect)(api.Pilot_getCurrent).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAll).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_get).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getLatestFlight).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllFlights).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllAirlines).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getStats).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllFlightsDepartures).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllFlightsArrivals).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllFlightDeparturesAndArrivals).to.be.a('function');
                (0, chai_1.expect)(api.Pilot_getAllScreenshots).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getAll).to.be.a('function');
                (0, chai_1.expect)(api.Airline_get).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getPilots).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getPilotStats).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getFlights).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getAllFlightsDepartures).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getAllFlightsArrivals).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getAllFlightDeparturesAndArrivals).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getAllScreenshots).to.be.a('function');
                (0, chai_1.expect)(api.Airline_getStats).to.be.a('function');
                (0, chai_1.expect)(api.Flight_getFlightById).to.be.a('function');
                (0, chai_1.expect)(api.Flight_getFlightScreenshotsById).to.be.a('function');
                return [2 /*return*/];
            });
        });
    });
    (0, mocha_1.describe)('Pilot', function () {
        it('Pilot_getCurrent() is called, it should return a valid CurrentPilot object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            (0, chai_1.expect)(pilot).to.be.an('Object');
                            (0, chai_1.expect)(pilot.id).to.be.a('number');
                            (0, chai_1.expect)(pilot.name).to.be.a('string');
                            (0, chai_1.expect)(pilot.base).to.be.a('string');
                            (0, chai_1.expect)(pilot.locale).to.be.an('string');
                            (0, chai_1.expect)(pilot.gps).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAll() is called, it should return an array of valid Pilot objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilots;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getAll()];
                        case 1:
                            pilots = _a.sent();
                            (0, chai_1.expect)(pilots).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_get(id) is called, it should return a valid Pilot object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_get(1)];
                        case 1:
                            pilot = _a.sent();
                            (0, chai_1.expect)(pilot).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getLatestFlight(id) is called, it should return a valid Flight object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, flight;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getLatestFlight(pilot.id)];
                        case 2:
                            flight = _a.sent();
                            (0, chai_1.expect)(flight).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllFlights(id) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllFlights(pilot.id)];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllAirlines(id) is called, it should return an array of valid Airline objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, airlines;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllAirlines(pilot.id)];
                        case 2:
                            airlines = _a.sent();
                            (0, chai_1.expect)(airlines).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getStats(id) is called, it should return a valid PilotStats object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, stats;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getStats(pilot.id)];
                        case 2:
                            stats = _a.sent();
                            (0, chai_1.expect)(stats).to.be.an('Object');
                            (0, chai_1.expect)(stats.id).to.be.a('number');
                            (0, chai_1.expect)(stats.all_time).to.be.an('Object');
                            (0, chai_1.expect)(stats.month).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllFlightsDepartures(pilot.id, 'KPHX')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllFlightsArrivals(pilot.id, 'KPHX')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllFlightDeparturesAndArrivals(pilot.id, 'KPHX', 'KJAC')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Pilot_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var pilot, screenshots;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 1:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Pilot_getAllScreenshots(pilot.id)];
                        case 2:
                            screenshots = _a.sent();
                            (0, chai_1.expect)(screenshots).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('Airline', function () {
        it('Airline_getAll() is called, it should return an array of valid Airline objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airlines;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_getAll()];
                        case 1:
                            airlines = _a.sent();
                            (0, chai_1.expect)(airlines).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_get(id) is called, it should return a valid Airline object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            (0, chai_1.expect)(airline).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getPilots(id) is called, it should return an array of valid Pilot objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, pilots;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getPilots(airline.id)];
                        case 2:
                            pilots = _a.sent();
                            (0, chai_1.expect)(pilots).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getPilotStats(id, pilotId) is called, it should return a valid PilotStats object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, pilot, stats;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Pilot_getCurrent()];
                        case 2:
                            pilot = _a.sent();
                            return [4 /*yield*/, api.Airline_getPilotStats(airline.id, pilot.id)];
                        case 3:
                            stats = _a.sent();
                            (0, chai_1.expect)(stats).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getFlights(id) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getFlights(airline.id)];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getAllFlightsDepartures(id, airportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getAllFlightsDepartures(airline.id, 'KPHX')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getAllFlightsArrivals(id, airportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getAllFlightsArrivals(airline.id, 'KPHX')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode) is called, it should return an array of valid Flight objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, flights;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getAllFlightDeparturesAndArrivals(airline.id, 'KPHX', 'KJAC')];
                        case 2:
                            flights = _a.sent();
                            (0, chai_1.expect)(flights).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getAllScreenshots(id) is called, it should return an array of valid Screenshot objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, screenshots;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getAllScreenshots(airline.id)];
                        case 2:
                            screenshots = _a.sent();
                            (0, chai_1.expect)(screenshots).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Airline_getStats(id) is called, it should return a valid object with airline statistics', function () {
            return __awaiter(this, void 0, void 0, function () {
                var airline, stats;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Airline_get(6082)];
                        case 1:
                            airline = _a.sent();
                            return [4 /*yield*/, api.Airline_getStats(airline.id)];
                        case 2:
                            stats = _a.sent();
                            (0, chai_1.expect)(stats).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    (0, mocha_1.describe)('Flight', function () {
        it('Flight_getFlightById(id) is called, it should return a valid Flight object', function () {
            return __awaiter(this, void 0, void 0, function () {
                var flight;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Flight_getFlightById(4009359)];
                        case 1:
                            flight = _a.sent();
                            (0, chai_1.expect)(flight).to.be.an('Object');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('Flight_getFlightScreenshotsById(id) is called, it should return an array of valid Screenshot objects', function () {
            return __awaiter(this, void 0, void 0, function () {
                var flight;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.Flight_getFlightScreenshotsById(4009359)];
                        case 1:
                            flight = _a.sent();
                            (0, chai_1.expect)(flight).to.be.an('Array');
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=index.spec.js.map