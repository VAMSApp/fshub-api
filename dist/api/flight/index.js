"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
var Flight_getFlightById_1 = __importDefault(require("./Flight_getFlightById"));
var Flight_getFlightScreenshotsById_1 = __importDefault(require("./Flight_getFlightScreenshotsById"));
var Flight_getFlights_1 = __importDefault(require("./Flight_getFlights"));
exports.Flight = {
    getFlightById: Flight_getFlightById_1.default,
    getFlightScreenshotsById: Flight_getFlightScreenshotsById_1.default,
    getFlights: Flight_getFlights_1.default,
};
//# sourceMappingURL=index.js.map