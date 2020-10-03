import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TravolicController } from './travolic.controller';
import { TravolicService } from './travolic.service';

describe('TravolicController', () => {
  let controller: TravolicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TravolicController],
      providers: [TravolicService],
    }).compile();

    controller = module.get<TravolicController>(TravolicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
