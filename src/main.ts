import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const SwaggerDocs = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('api-docs', app, SwaggerDocs);
  await app.listen(3000);
}
bootstrap();
