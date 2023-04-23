import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
  const app = await NestFactory.create(AppModule, { cors: true });
  { cors: true } - Alternatively, set the cors property to true to enable CORS with default settings
  */
  app.enableCors(); // CORS enabled
  // global prefix
  app.setGlobalPrefix('api');

  // swagger config
  const options = new DocumentBuilder()
    .setTitle('NestJS API Example')
    .setDescription('Przykładowy projekt w NestJS')
    .setVersion('1.0')
    .addTag('user')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  // end of swagger config

  await app.listen(3000);
}
bootstrap();
