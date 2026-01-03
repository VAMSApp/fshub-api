"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airport = void 0;
var Airport_findByICAO_1 = __importDefault(require("./Airport_findByICAO"));
var Airport_findMETAR_1 = __importDefault(require("./Airport_findMETAR"));
exports.Airport = {
    findByICAO: Airport_findByICAO_1.default,
    findMETAR: Airport_findMETAR_1.default,
};
//# sourceMappingURL=index.js.map