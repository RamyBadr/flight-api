import { ApiParam, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsDateString,
  IsDate,
  IsOptional,
  IsInt,
  isEnum,
  IsEnum,
  IsNumberString,
  Min,
  Max,
} from 'class-validator';
import { SelectedCapins } from '../enums/selected-capins.enum';
import { CurrencyCode } from '../enums/currency-code.enum';
import { FlyDaysType } from '../enums/fly-days-type.enum';
import { Locale } from '../enums/locale-enum';
import { FlightType } from '../enums/flight-type.enum';
import { SortBy } from '../enums/sort-by.enum';
import { VehicleType } from '../enums/vehicle-type.enum';
import { ApiDescription } from '../enums/api-descriptions.enum';

export class SearchFlightDto {
  @ApiProperty({ description: ApiDescription.fly_from, default: 'US' })
  @IsString()
  @IsNotEmpty()
  fly_from: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'FRA', description: ApiDescription.fly_to })
  fly_to: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: ApiDescription.date_from, default: '15/12/2020' })
  date_from: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: ApiDescription.date_to, default: '30/12/2020' })
  date_to: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: ApiDescription.return_from })
  return_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'dd/mm/yyyy' })
  return_to?: string;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  nights_in_dst_from?: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  nights_in_dst_to?: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  max_fly_duration?: number;

  @IsOptional()
  @IsEnum(FlightType)
  @ApiPropertyOptional({ enum: FlightType })
  flight_type: FlightType;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  one_for_city?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  one_per_date?: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  adults?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  children?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  infants?: number;

  @IsOptional()
  @IsString()
  @IsEnum(SelectedCapins)
  @ApiPropertyOptional({
    enum: SelectedCapins,
  })
  selected_cabins?: SelectedCapins;

  @IsOptional()
  @IsString()
  @IsEnum(SelectedCapins)
  @ApiPropertyOptional({
    enum: SelectedCapins,
  })
  mix_with_cabins?: SelectedCapins;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  fly_days?: string;

  @IsOptional()
  @IsEnum(FlyDaysType)
  @ApiPropertyOptional({ enum: FlyDaysType })
  fly_days_type?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  return_fly_days?: string;

  @IsOptional()
  @IsEnum(FlyDaysType)
  @ApiPropertyOptional({ enum: FlyDaysType })
  ret_fly_days_type?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({})
  only_working_days?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({})
  only_weekends?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  partner_market?: string;

  @IsOptional()
  @IsEnum(CurrencyCode)
  @ApiPropertyOptional({
    enum: CurrencyCode,
    description: 'use this parameter to change the currency in the response',
  })
  curr?: CurrencyCode;

  @IsOptional()
  @IsEnum(Locale)
  @ApiPropertyOptional({
    enum: Locale,
    description:
      'the language of city names in the response and also language of kiwi.com website to which deep_links lead',
  })
  locale?: string;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  price_from?: number;

  @IsOptional()
  @IsNumberString()
  @IsInt()
  @ApiPropertyOptional({ type: 'integer' })
  price_to?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  dtime_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  dtime_to?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  atime_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  atime_to?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  ret_dtime_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  ret_dtime_to?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  ret_atime_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  ret_atime_to?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  stopover_from?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  stopover_to?: string;

  @ApiPropertyOptional({ type: 'integer' })
  max_stopovers?: number;

  @ApiPropertyOptional({ type: 'integer' })
  max_sector_stopovers?: number;

  @ApiPropertyOptional({ type: 'integer' })
  conn_on_diff_airport?: number;

  @ApiPropertyOptional({ type: 'integer' })
  ret_from_diff_airport?: number;

  @ApiPropertyOptional({ type: 'integer' })
  ret_to_diff_airport?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  select_airlines?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({})
  select_airlines_exclude?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({})
  select_stop_airport?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({})
  select_stop_airport_exclude?: boolean;

  @IsOptional()
  @IsEnum(VehicleType)
  @ApiPropertyOptional({ enum: VehicleType })
  vehicle_type?: VehicleType;

  @IsOptional()
  @IsEnum(SortBy)
  @ApiPropertyOptional({ enum: SortBy })
  sort?: SortBy;

  @Type(() => Number)
  @IsOptional()
  @IsInt({})
  @Min(0)
  @Max(1)
  @ApiPropertyOptional({
    type: 'integer',
    minimum: 0,
    maximum: 1,
    description:
      'can be set to 1 or 0, default is 1 - from cheapest flights to the most expensive',
  })
  asc?: number;
}
