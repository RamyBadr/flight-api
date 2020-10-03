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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSearchResponse = exports.FlightSearchResponseRecord = exports.FlightRoute = exports.AvailabilityDto = exports.BagLimit = exports.LocationDto = exports.FlightSearchResponseRecordDuration = void 0;
const swagger_1 = require("@nestjs/swagger");
class FlightSearchResponseRecordDuration {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecordDuration.prototype, "departure", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecordDuration.prototype, "return", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecordDuration.prototype, "total", void 0);
exports.FlightSearchResponseRecordDuration = FlightSearchResponseRecordDuration;
class LocationDto {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], LocationDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], LocationDto.prototype, "name", void 0);
exports.LocationDto = LocationDto;
class BagLimit {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hand_width", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hand_height", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hand_length", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hand_weight", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hold_width", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hold_height", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hold_length", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hold_dimensions_sum", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], BagLimit.prototype, "hold_weight", void 0);
exports.BagLimit = BagLimit;
class AvailabilityDto {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], AvailabilityDto.prototype, "seats", void 0);
exports.AvailabilityDto = AvailabilityDto;
class FlightRoute {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "fare_basis", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "fare_category", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "fare_classes", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "fare_family", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "last_seen", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "refresh_timestamp", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightRoute.prototype, "return", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Boolean)
], FlightRoute.prototype, "bags_recheck_required", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Boolean)
], FlightRoute.prototype, "guarantee", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "combination_id", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "cityTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "cityFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "cityCodeFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "cityCodeTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "flyTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "flyFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "airline", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "operating_carrier", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightRoute.prototype, "equipment", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightRoute.prototype, "flight_no", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "vehicle_type", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightRoute.prototype, "operating_flight_no", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "local_arrival", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "utc_arrival", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "local_departure", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightRoute.prototype, "utc_departure", void 0);
exports.FlightRoute = FlightRoute;
class FlightSearchResponseRecord {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "nightsInDest", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", FlightSearchResponseRecordDuration)
], FlightSearchResponseRecord.prototype, "duration", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "flyFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "cityFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "cityCodeFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", LocationDto)
], FlightSearchResponseRecord.prototype, "countryFrom", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "flyTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "cityTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "cityCodeTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", LocationDto)
], FlightSearchResponseRecord.prototype, "countryTo", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "distance", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponseRecord.prototype, "routes", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponseRecord.prototype, "airlines", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "pnr_count", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Boolean)
], FlightSearchResponseRecord.prototype, "has_airport_change", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "technical_stops", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightSearchResponseRecord.prototype, "bags_price", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", BagLimit)
], FlightSearchResponseRecord.prototype, "baglimit", void 0);
__decorate([
    swagger_1.ApiProperty({ type: AvailabilityDto }),
    __metadata("design:type", AvailabilityDto)
], FlightSearchResponseRecord.prototype, "availability", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Boolean)
], FlightSearchResponseRecord.prototype, "facilitated_booking_available", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightSearchResponseRecord.prototype, "conversion", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponseRecord.prototype, "quality", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "booking_token", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "deep_link", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightSearchResponseRecord.prototype, "tracking_pixel", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponseRecord.prototype, "transfers", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponseRecord.prototype, "type_flights", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Boolean)
], FlightSearchResponseRecord.prototype, "virtual_interlining", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponseRecord.prototype, "route", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "local_arrival", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "utc_arrival", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "local_departure", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponseRecord.prototype, "utc_departure", void 0);
exports.FlightSearchResponseRecord = FlightSearchResponseRecord;
class FlightSearchResponse {
}
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponse.prototype, "searchId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [FlightSearchResponseRecord] }),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "data", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "connections", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponse.prototype, "time", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", String)
], FlightSearchResponse.prototype, "currency", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponse.prototype, "currency_rate", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Number)
], FlightSearchResponse.prototype, "fx_rate", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "refresh", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightSearchResponse.prototype, "del", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "ref_tasks", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Object)
], FlightSearchResponse.prototype, "search_params", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "all_stopover_airports", void 0);
__decorate([
    swagger_1.ApiProperty({}),
    __metadata("design:type", Array)
], FlightSearchResponse.prototype, "all_airlines", void 0);
exports.FlightSearchResponse = FlightSearchResponse;
//# sourceMappingURL=flight-search-response.dto.js.map