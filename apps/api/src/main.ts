import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as compression from 'compression';
import * as helmet from 'helmet';

async function bootstrap() {
  const PORT = environment.port || 3333;
  const GLOBAL_PREFIX = 'api';

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(compression());
  app.use(helmet());
  app.enableCors();

  app.setGlobalPrefix(GLOBAL_PREFIX);

  await app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/${GLOBAL_PREFIX}`);
  });
}

bootstrap();
