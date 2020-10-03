import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TravolicModule } from './travolic/travolic.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TravolicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
