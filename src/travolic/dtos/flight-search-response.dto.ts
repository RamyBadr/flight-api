import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class FlightSearchResponseRecordDuration {
  @ApiProperty({})
  departure: number;
  @ApiProperty({})
  return: number;
  @ApiProperty({})
  total: number;
}
export class LocationDto {
  @ApiProperty({})
  code: string;
  @ApiProperty({})
  name: string;
}
export class BagLimit {
  @ApiProperty({})
  hand_width: number;
  @ApiProperty({})
  hand_height: number;
  @ApiProperty({})
  hand_length: number;
  @ApiProperty({})
  hand_weight: number;
  @ApiProperty({})
  hold_width: number;
  @ApiProperty({})
  hold_height: number;
  @ApiProperty({})
  hold_length: number;
  @ApiProperty({})
  hold_dimensions_sum: number;
  @ApiProperty({})
  hold_weight: number;
}
export class AvailabilityDto {
  @ApiProperty({})
  seats: object;
}
export class FlightRoute {
  @ApiProperty({})
  fare_basis: string;
  @ApiProperty({})
  fare_category: string;
  @ApiProperty({})
  fare_classes: string;
  @ApiProperty({})
  fare_family: string;
  @ApiProperty({})
  last_seen: string;
  @ApiProperty({})
  refresh_timestamp: string;
  @ApiProperty({})
  return: number;
  @ApiProperty({})
  bags_recheck_required: boolean;
  @ApiProperty({})
  guarantee: boolean;
  @ApiProperty({})
  id: string;
  @ApiProperty({})
  combination_id: string;
  @ApiProperty({})
  cityTo: string;
  @ApiProperty({})
  cityFrom: string;
  @ApiProperty({})
  cityCodeFrom: string;
  @ApiProperty({})
  cityCodeTo: string;
  @ApiProperty({})
  flyTo: string;
  @ApiProperty({})
  flyFrom: string;
  @ApiProperty({})
  airline: string;
  @ApiProperty({})
  operating_carrier: string;
  @ApiProperty({})
  equipment: object;
  @ApiProperty({})
  flight_no: number;
  @ApiProperty({})
  vehicle_type: string;
  @ApiProperty({})
  operating_flight_no: number;
  @ApiProperty({})
  local_arrival: string;
  @ApiProperty({})
  utc_arrival: string;
  @ApiProperty({})
  local_departure: string;
  @ApiProperty({})
  utc_departure: string;
}

export class FlightSearchResponseRecord {
  @ApiProperty({})
  id: string;
  @ApiProperty({})
  nightsInDest: number;
  @ApiProperty({})
  duration: FlightSearchResponseRecordDuration;
  @ApiProperty({})
  flyFrom: string;
  @ApiProperty({})
  cityFrom: string;
  @ApiProperty({})
  cityCodeFrom: string;
  @ApiProperty({})
  countryFrom: LocationDto;
  @ApiProperty({})
  flyTo: string;
  @ApiProperty({})
  cityTo: string;
  @ApiProperty({})
  cityCodeTo: string;
  @ApiProperty({})
  countryTo: LocationDto;
  @ApiProperty({})
  distance: number;
  @ApiProperty({})
  routes: string[][];
  @ApiProperty({})
  airlines: string[];
  @ApiProperty({})
  pnr_count: number;
  @ApiProperty({})
  has_airport_change: boolean;
  @ApiProperty({})
  technical_stops: number;
  @ApiProperty({})
  price: number;
  @ApiProperty({})
  bags_price: any;
  @ApiProperty({})
  baglimit: BagLimit;
  @ApiProperty({ type: AvailabilityDto })
  availability: AvailabilityDto;
  @ApiProperty({})
  facilitated_booking_available: boolean;
  @ApiProperty({})
  conversion: any;
  @ApiProperty({})
  quality: number;
  @ApiProperty({})
  booking_token: string;
  @ApiProperty({})
  deep_link: string;
  @ApiProperty({})
  tracking_pixel: object;
  @ApiProperty({})
  transfers: any[];
  @ApiProperty({})
  type_flights: string[];
  @ApiProperty({})
  virtual_interlining: boolean;
  @ApiProperty({})
  route: FlightRoute[];
  @ApiProperty({})
  local_arrival: string;
  @ApiProperty({})
  utc_arrival: string;
  @ApiProperty({})
  local_departure: string;
  @ApiProperty({})
  utc_departure: string;
}
export class FlightSearchResponse {
  @ApiProperty({})
  searchId: string;
  @ApiProperty({ type: [FlightSearchResponseRecord] })
  data: FlightSearchResponseRecord[];
  @ApiProperty({})
  connections: any[];
  @ApiProperty({})
  time: number;
  @ApiProperty({})
  currency: string;
  @ApiProperty({})
  currency_rate: number;
  @ApiProperty({})
  fx_rate: number;
  @ApiProperty({})
  refresh: any[];
  @ApiProperty({})
  del: any;
  @ApiProperty({})
  ref_tasks: any[];
  @ApiProperty({})
  search_params: any;
  @ApiProperty({})
  all_stopover_airports: any[];
  @ApiProperty({})
  all_airlines: any[];
}
