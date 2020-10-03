import { ApiParam, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';
import { SelectedCapins } from '../enums/selected-capins.enum';

export class SearchFlightDto {
  @ApiProperty({ description: `` })
  @IsString()
  @IsNotEmpty()
  fly_from: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({})
  fly_to: string;
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({})
  date_from: string;
  @IsString()
  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({})
  date_to: string;
  @ApiPropertyOptional({})
  return_from?: string;
  @ApiPropertyOptional({})
  return_to?: string;
  @ApiPropertyOptional({})
  nights_in_dst_from?: number;
  @ApiPropertyOptional({})
  nights_in_dst_to?: number;
  @ApiPropertyOptional({})
  max_fly_duration?: number;
  @ApiPropertyOptional({})
  one_for_city?: number;
  @ApiPropertyOptional({})
  one_per_date?: number;
  @ApiPropertyOptional({})
  adults?: number;
  @ApiPropertyOptional({})
  children?: number;
  @ApiPropertyOptional({})
  infants?: number;
  @ApiPropertyOptional({ enum: SelectedCapins })
  selected_cabins?: string;
  @ApiPropertyOptional({})
  mix_with_cabins?: string;
  @ApiPropertyOptional({})
  fly_days?: string;
  @ApiPropertyOptional({})
  fly_days_type?: string;
  @ApiPropertyOptional({})
  return_fly_days?: string;
  @ApiPropertyOptional({})
  ret_fly_days_type?: string;
  @ApiPropertyOptional({})
  only_working_days?: boolean;
  @ApiPropertyOptional({})
  only_weekends?: boolean;
  @ApiPropertyOptional({})
  partner_market?: string;
  @ApiPropertyOptional({})
  curr?: string;
  @ApiPropertyOptional({})
  locale?: string;
  @ApiPropertyOptional({})
  price_from?: number;
  @ApiPropertyOptional({})
  price_to?: number;
  @ApiPropertyOptional({})
  dtime_from?: string;
  @ApiPropertyOptional({})
  dtime_to?: string;
  @ApiPropertyOptional({})
  atime_from?: string;
  @ApiPropertyOptional({})
  atime_to?: string;
  @ApiPropertyOptional({})
  ret_dtime_from?: string;
  @ApiPropertyOptional({})
  ret_dtime_to?: string;
  @ApiPropertyOptional({})
  ret_atime_from?: string;
  @ApiPropertyOptional({})
  ret_atime_to?: string;
  @ApiPropertyOptional({})
  stopover_from?: string;
  @ApiPropertyOptional({})
  stopover_to?: string;
  @ApiPropertyOptional({})
  max_stopovers?: number;
  @ApiPropertyOptional({})
  max_sector_stopovers?: number;
  @ApiPropertyOptional({})
  conn_on_diff_airport?: number;
  @ApiPropertyOptional({})
  ret_from_diff_airport?: number;
  @ApiPropertyOptional({})
  ret_to_diff_airport?: number;
  @ApiPropertyOptional({})
  select_airlines?: string;
  @ApiPropertyOptional({})
  select_airlines_exclude?: boolean;
  @ApiPropertyOptional({})
  select_stop_airport?: string;
  @ApiPropertyOptional({})
  select_stop_airport_exclude?: boolean;
  @ApiPropertyOptional({})
  vehicle_type?: string;
  @ApiPropertyOptional({})
  sort?: string;
  @ApiPropertyOptional({})
  asc?: number;
}
