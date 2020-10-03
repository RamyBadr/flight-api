import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FlightSearchResponse } from './dtos/flight-search-response.dto';
export declare class TravolicService {
    private readonly httpService;
    private configService;
    private readonly apiUrl;
    private readonly apiKey;
    constructor(httpService: HttpService, configService: ConfigService);
    search(params: any): Promise<FlightSearchResponse>;
}
