import { Test, TestingModule } from '@nestjs/testing';
import { TravolicService } from './travolic.service';

describe('TravolicService', () => {
  let service: TravolicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravolicService],
    }).compile();

    service = module.get<TravolicService>(TravolicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
