import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { FlightSearchResponse } from './dtos/flight-search-response.dto';
import { SearchFlightDto } from './dtos/search-flight.dto';
import { TravolicService } from './travolic.service';

@Controller('travolic')
export class TravolicController {
  constructor(private readonly _service: TravolicService) {}

  @ApiOkResponse({
    type: FlightSearchResponse,
    description: 'Successfully created',
  })
  @Get('search')
  search(@Query() params: SearchFlightDto): Promise<FlightSearchResponse> {
    return this._service.search(params);
  }
}
