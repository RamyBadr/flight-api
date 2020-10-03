"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravolicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const flight_search_response_dto_1 = require("./dtos/flight-search-response.dto");
const search_flight_dto_1 = require("./dtos/search-flight.dto");
const travolic_service_1 = require("./travolic.service");
let TravolicController = class TravolicController {
    constructor(_service) {
        this._service = _service;
    }
    search(params) {
        return this._service.search(params);
    }
};
__decorate([
    swagger_1.ApiOkResponse({
        type: flight_search_response_dto_1.FlightSearchResponse,
        description: 'Flight Info Response',
    }),
    common_1.Get('travolic'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_flight_dto_1.SearchFlightDto]),
    __metadata("design:returntype", Promise)
], TravolicController.prototype, "search", null);
TravolicController = __decorate([
    common_1.Controller('api/search'),
    __metadata("design:paramtypes", [travolic_service_1.TravolicService])
], TravolicController);
exports.TravolicController = TravolicController;
//# sourceMappingURL=travolic.controller.js.map