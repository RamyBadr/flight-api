import {
  HttpCode,
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { FlightSearchResponse } from './dtos/flight-search-response.dto';

@Injectable()
export class TravolicService {
  private readonly apiUrl: string;
  private readonly apiKey: string;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl = configService.get('KIWI_API_URL');
    this.apiKey = configService.get('KIWI_API_KEY');
  }
  async search(params: any) {
    try {
      let result = await this.httpService
        .get(this.apiUrl, {
          params: {
            apikey: this.apiKey,
            ...params,
          },
        })
        .toPromise<AxiosResponse<FlightSearchResponse>>();
      return result.data as FlightSearchResponse;
    } catch (error) {
      throw new HttpException(
        {
          status: error.response.status,
          error: HttpStatus[error.response.status],
          data: error.response.data.message,
        },
        error.response.status,
      );
    }
  }
}
