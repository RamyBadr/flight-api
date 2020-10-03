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
exports.TravolicService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let TravolicService = class TravolicService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.apiUrl = configService.get('KIWI_API_URL');
        this.apiKey = configService.get('KIWI_API_KEY');
    }
    async search(params) {
        try {
            let result = await this.httpService
                .get(this.apiUrl, {
                params: Object.assign({ apikey: this.apiKey }, params),
            })
                .toPromise();
            return result.data;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: error.response.status,
                error: common_1.HttpStatus[error.response.status],
                flightsApiError: true,
                message: error.response.data.message,
            }, error.response.status);
        }
    }
};
TravolicService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        config_1.ConfigService])
], TravolicService);
exports.TravolicService = TravolicService;
//# sourceMappingURL=travolic.service.js.map