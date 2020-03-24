import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

const ROOT = join(__dirname, '../', 'sdg-captcha');

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: ROOT })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
