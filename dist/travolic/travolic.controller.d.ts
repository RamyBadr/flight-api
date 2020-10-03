import { FlightSearchResponse } from './dtos/flight-search-response.dto';
import { SearchFlightDto } from './dtos/search-flight.dto';
import { TravolicService } from './travolic.service';
export declare class TravolicController {
    private readonly _service;
    constructor(_service: TravolicService);
    search(params: SearchFlightDto): Promise<FlightSearchResponse>;
}
