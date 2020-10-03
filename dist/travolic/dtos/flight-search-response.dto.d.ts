export declare class FlightSearchResponseRecordDuration {
    departure: number;
    return: number;
    total: number;
}
export declare class LocationDto {
    code: string;
    name: string;
}
export declare class BagLimit {
    hand_width: number;
    hand_height: number;
    hand_length: number;
    hand_weight: number;
    hold_width: number;
    hold_height: number;
    hold_length: number;
    hold_dimensions_sum: number;
    hold_weight: number;
}
export declare class AvailabilityDto {
    seats: object;
}
export declare class FlightRoute {
    fare_basis: string;
    fare_category: string;
    fare_classes: string;
    fare_family: string;
    last_seen: string;
    refresh_timestamp: string;
    return: number;
    bags_recheck_required: boolean;
    guarantee: boolean;
    id: string;
    combination_id: string;
    cityTo: string;
    cityFrom: string;
    cityCodeFrom: string;
    cityCodeTo: string;
    flyTo: string;
    flyFrom: string;
    airline: string;
    operating_carrier: string;
    equipment: object;
    flight_no: number;
    vehicle_type: string;
    operating_flight_no: number;
    local_arrival: string;
    utc_arrival: string;
    local_departure: string;
    utc_departure: string;
}
export declare class FlightSearchResponseRecord {
    id: string;
    nightsInDest: number;
    duration: FlightSearchResponseRecordDuration;
    flyFrom: string;
    cityFrom: string;
    cityCodeFrom: string;
    countryFrom: LocationDto;
    flyTo: string;
    cityTo: string;
    cityCodeTo: string;
    countryTo: LocationDto;
    distance: number;
    routes: string[][];
    airlines: string[];
    pnr_count: number;
    has_airport_change: boolean;
    technical_stops: number;
    price: number;
    bags_price: any;
    baglimit: BagLimit;
    availability: AvailabilityDto;
    facilitated_booking_available: boolean;
    conversion: any;
    quality: number;
    booking_token: string;
    deep_link: string;
    tracking_pixel: object;
    transfers: any[];
    type_flights: string[];
    virtual_interlining: boolean;
    route: FlightRoute[];
    local_arrival: string;
    utc_arrival: string;
    local_departure: string;
    utc_departure: string;
}
export declare class FlightSearchResponse {
    searchId: string;
    data: FlightSearchResponseRecord[];
    connections: any[];
    time: number;
    currency: string;
    currency_rate: number;
    fx_rate: number;
    refresh: any[];
    del: any;
    ref_tasks: any[];
    search_params: any;
    all_stopover_airports: any[];
    all_airlines: any[];
}
