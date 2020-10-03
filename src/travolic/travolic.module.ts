import { HttpModule, Module } from '@nestjs/common';
import { TravolicController } from './travolic.controller';
import { TravolicService } from './travolic.service';
@Module({
  imports: [HttpModule],
  controllers: [TravolicController],
  providers: [TravolicService],
})
export class TravolicModule {}
