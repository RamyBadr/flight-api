import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { setupSwagger } from './viveo-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  setupSwagger(app, configService.get('NODE_ENV'));
  await app.listen(port);
  Logger.log(`app started on port: ${port}`, 'Main');
}
bootstrap();
