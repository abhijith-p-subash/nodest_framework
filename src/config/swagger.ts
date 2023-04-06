import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('NODEST FRAME-WORK')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
