"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var axios_1 = __importDefault(require("axios"));
var api_1 = require("./api");
__exportStar(require("./types"), exports);
var FSHubApiClass = /** @class */ (function () {
    function FSHubApiClass(config) {
        if (!config.apiKey) {
            throw new Error('FSHub API key is required!');
        }
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: this.config.baseURL || 'https://fshub.io/api/v3/',
            headers: __assign({ 'Content-Type': 'application/json', 'X-Pilot-Token': this.config.apiKey }, this.config.headers),
            timeout: this.config.timeout || 10000
        });
        this.Pilot_getCurrent = this.Pilot_getCurrent.bind(this);
        this.Pilot_getAll = this.Pilot_getAll.bind(this);
        this.Pilot_get = this.Pilot_get.bind(this);
        this.Pilot_getLatestFlight = this.Pilot_getLatestFlight.bind(this);
        this.Pilot_getAllFlights = this.Pilot_getAllFlights.bind(this);
        this.Pilot_getAllAirlines = this.Pilot_getAllAirlines.bind(this);
        this.Pilot_getStats = this.Pilot_getStats.bind(this);
        this.Pilot_getAllFlightsDepartures = this.Pilot_getAllFlightsDepartures.bind(this);
        this.Pilot_getAllFlightsArrivals = this.Pilot_getAllFlightsArrivals.bind(this);
        this.Pilot_getAllFlightDeparturesAndArrivals = this.Pilot_getAllFlightDeparturesAndArrivals.bind(this);
        this.Pilot_getAllScreenshots = this.Pilot_getAllScreenshots.bind(this);
        this.Airline_getAll = this.Airline_getAll.bind(this);
        this.Airline_get = this.Airline_get.bind(this);
        this.Airline_getPilots = this.Airline_getPilots.bind(this);
        this.Airline_getPilotStats = this.Airline_getPilotStats.bind(this);
        this.Airline_getFlights = this.Airline_getFlights.bind(this);
        this.Airline_getAllFlightsDepartures = this.Airline_getAllFlightsDepartures.bind(this);
        this.Airline_getAllFlightsArrivals = this.Airline_getAllFlightsArrivals.bind(this);
        this.Airline_getAllFlightDeparturesAndArrivals = this.Airline_getAllFlightDeparturesAndArrivals.bind(this);
        this.Airline_getAllScreenshots = this.Airline_getAllScreenshots.bind(this);
        this.Airline_getStats = this.Airline_getStats.bind(this);
        this.Airline_approveApplication = this.Airline_approveApplication.bind(this);
        this.Airline_rejectApplication = this.Airline_rejectApplication.bind(this);
        this.Airline_pilotPointPurchase = this.Airline_pilotPointPurchase.bind(this);
        this.Airline_pilotSetRank = this.Airline_pilotSetRank.bind(this);
        this.Airline_getAllRanks = this.Airline_getAllRanks.bind(this);
        this.Airline_getAllRoles = this.Airline_getAllRoles.bind(this);
        this.Flight_getFlightById = this.Flight_getFlightById.bind(this);
        this.Flight_getFlightScreenshotsById = this.Flight_getFlightScreenshotsById.bind(this);
        this.Flight_getFlights = this.Flight_getFlights.bind(this);
        this.Airport_findByICAO = this.Airport_findByICAO.bind(this);
        this.Airport_findMETAR = this.Airport_findMETAR.bind(this);
    }
    FSHubApiClass.prototype.Pilot_getCurrent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getCurrent(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAll(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.get(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getLatestFlight = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getLatestFlight(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllFlights = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllFlights(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllAirlines = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllAirlines(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getStats = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getStats(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllFlightsDepartures = function (id, airportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllFlightsDepartures(id, airportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllFlightsArrivals = function (id, airportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllFlightsArrivals(id, airportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllFlightDeparturesAndArrivals = function (id, departureAirportCode, arrivalAirportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Pilot_getAllScreenshots = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.pilot.getAllScreenshots(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAll(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.get(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getPilots = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getPilots(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getPilotStats = function (id, pilotId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getPilotStats(id, pilotId, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getFlights = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getFlights(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllFlightsDepartures = function (id, airportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllFlightsDepartures(id, airportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllFlightsArrivals = function (id, airportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllFlightsArrivals(id, airportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllFlightDeparturesAndArrivals = function (id, departureAirportCode, arrivalAirportCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllFlightDeparturesAndArrivals(id, departureAirportCode, arrivalAirportCode, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllScreenshots = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllScreenshots(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getStats = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getStats(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_approveApplication = function (pilotId, airlineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.approveApplication(pilotId, airlineId, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_rejectApplication = function (pilotId, airlineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.rejectApplication(pilotId, airlineId, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_pilotPointPurchase = function (pilotId, airlineId, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.pilotPointPurchase(pilotId, airlineId, data, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_pilotSetRank = function (pilotId, airlineId, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.pilotSetRank(pilotId, airlineId, data, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllRanks = function (airlineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllRanks(airlineId, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airline_getAllRoles = function (airlineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airline.getAllRoles(airlineId, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Flight_getFlightById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.flight.getFlightById(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Flight_getFlightScreenshotsById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.flight.getFlightScreenshotsById(id, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Flight_getFlights = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.flight.getFlights(this, options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airport_findByICAO = function (icao) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airport.findByICAO(icao, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FSHubApiClass.prototype.Airport_findMETAR = function (icao) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_1.Api.airport.findMETAR(icao, this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FSHubApiClass;
}());
exports.default = FSHubApiClass;
//# sourceMappingURL=index.js.map