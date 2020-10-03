import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { FlightSearchResponse } from './dtos/flight-search-response.dto';
import { SearchFlightDto } from './dtos/search-flight.dto';
import { TravolicService } from './travolic.service';

@Controller('api/search')
export class TravolicController {
  constructor(private readonly _service: TravolicService) {}

  @ApiOkResponse({
    type: FlightSearchResponse,
    description: 'Flight Info Response',
  })
  @Get('travolic')
  search(@Query() params: SearchFlightDto): Promise<FlightSearchResponse> {
    return this._service.search(params);
  }
}
