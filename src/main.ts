import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  await server.listen(process.env.PORT, process.env.SERVER_HOST);
  console.log(`Application is running on: ${await server.getUrl()}`);
}

bootstrap();
