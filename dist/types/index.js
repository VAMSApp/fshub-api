"use strict";
/**
 * FSHub API Types and Interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirportType = exports.FlightStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
    UserRole["MODERATOR"] = "moderator";
})(UserRole || (exports.UserRole = UserRole = {}));
var FlightStatus;
(function (FlightStatus) {
    FlightStatus["SCHEDULED"] = "scheduled";
    FlightStatus["BOARDING"] = "boarding";
    FlightStatus["DEPARTED"] = "departed";
    FlightStatus["EN_ROUTE"] = "en_route";
    FlightStatus["APPROACHING"] = "approaching";
    FlightStatus["LANDED"] = "landed";
    FlightStatus["CANCELLED"] = "cancelled";
    FlightStatus["DELAYED"] = "delayed";
})(FlightStatus || (exports.FlightStatus = FlightStatus = {}));
var AirportType;
(function (AirportType) {
    AirportType["SMALL"] = "small";
    AirportType["MEDIUM"] = "medium";
    AirportType["LARGE"] = "large";
    AirportType["INTERNATIONAL"] = "international";
})(AirportType || (exports.AirportType = AirportType = {}));
//# sourceMappingURL=index.js.map