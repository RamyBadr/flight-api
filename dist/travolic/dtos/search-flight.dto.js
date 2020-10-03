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
exports.SearchFlightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const selected_capins_enum_1 = require("../enums/selected-capins.enum");
const currency_code_enum_1 = require("../enums/currency-code.enum");
const fly_days_type_enum_1 = require("../enums/fly-days-type.enum");
const locale_enum_1 = require("../enums/locale-enum");
const flight_type_enum_1 = require("../enums/flight-type.enum");
const sort_by_enum_1 = require("../enums/sort-by.enum");
const vehicle_type_enum_1 = require("../enums/vehicle-type.enum");
const api_descriptions_enum_1 = require("../enums/api-descriptions.enum");
class SearchFlightDto {
}
__decorate([
    swagger_1.ApiProperty({ description: api_descriptions_enum_1.ApiDescription.fly_from, default: 'US' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "fly_from", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ default: 'FRA', description: api_descriptions_enum_1.ApiDescription.fly_to }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "fly_to", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ description: api_descriptions_enum_1.ApiDescription.date_from, default: '15/12/2020' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "date_from", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ description: api_descriptions_enum_1.ApiDescription.date_to, default: '30/12/2020' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "date_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({ description: api_descriptions_enum_1.ApiDescription.return_from }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "return_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({ description: 'dd/mm/yyyy' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "return_to", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "nights_in_dst_from", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "nights_in_dst_to", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "max_fly_duration", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(flight_type_enum_1.FlightType),
    swagger_1.ApiPropertyOptional({ enum: flight_type_enum_1.FlightType }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "flight_type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "one_for_city", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "one_per_date", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "adults", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "children", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "infants", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsEnum(selected_capins_enum_1.SelectedCapins),
    swagger_1.ApiPropertyOptional({
        enum: selected_capins_enum_1.SelectedCapins,
    }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "selected_cabins", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsEnum(selected_capins_enum_1.SelectedCapins),
    swagger_1.ApiPropertyOptional({
        enum: selected_capins_enum_1.SelectedCapins,
    }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "mix_with_cabins", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "fly_days", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(fly_days_type_enum_1.FlyDaysType),
    swagger_1.ApiPropertyOptional({ enum: fly_days_type_enum_1.FlyDaysType }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "fly_days_type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "return_fly_days", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(fly_days_type_enum_1.FlyDaysType),
    swagger_1.ApiPropertyOptional({ enum: fly_days_type_enum_1.FlyDaysType }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "ret_fly_days_type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", Boolean)
], SearchFlightDto.prototype, "only_working_days", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", Boolean)
], SearchFlightDto.prototype, "only_weekends", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "partner_market", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(currency_code_enum_1.CurrencyCode),
    swagger_1.ApiPropertyOptional({
        enum: currency_code_enum_1.CurrencyCode,
        description: 'use this parameter to change the currency in the response',
    }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "curr", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(locale_enum_1.Locale),
    swagger_1.ApiPropertyOptional({
        enum: locale_enum_1.Locale,
        description: 'the language of city names in the response and also language of kiwi.com website to which deep_links lead',
    }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "locale", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "price_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    class_validator_1.IsInt(),
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "price_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "dtime_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "dtime_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "atime_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "atime_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "ret_dtime_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "ret_dtime_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "ret_atime_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "ret_atime_to", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "stopover_from", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "stopover_to", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "max_stopovers", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "max_sector_stopovers", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "conn_on_diff_airport", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "ret_from_diff_airport", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: 'integer' }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "ret_to_diff_airport", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "select_airlines", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", Boolean)
], SearchFlightDto.prototype, "select_airlines_exclude", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "select_stop_airport", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    swagger_1.ApiPropertyOptional({}),
    __metadata("design:type", Boolean)
], SearchFlightDto.prototype, "select_stop_airport_exclude", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(vehicle_type_enum_1.VehicleType),
    swagger_1.ApiPropertyOptional({ enum: vehicle_type_enum_1.VehicleType }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "vehicle_type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(sort_by_enum_1.SortBy),
    swagger_1.ApiPropertyOptional({ enum: sort_by_enum_1.SortBy }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "sort", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    class_validator_1.IsInt({}),
    class_validator_1.Min(0),
    class_validator_1.Max(1),
    swagger_1.ApiPropertyOptional({
        type: 'integer',
        minimum: 0,
        maximum: 1,
        description: 'can be set to 1 or 0, default is 1 - from cheapest flights to the most expensive',
    }),
    __metadata("design:type", Number)
], SearchFlightDto.prototype, "asc", void 0);
exports.SearchFlightDto = SearchFlightDto;
//# sourceMappingURL=search-flight.dto.js.map