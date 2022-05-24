import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as passport from 'passport';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';
import { description } from './documentation/swagger.doc';

async function bootstrap() {
  const bootstrapLogger = new Logger('Main');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  const globalPrefix = configService.get('HTTP_API_PREFIX');

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new PrismaExceptionFilter());
  app.use(passport.initialize());

  if (configService.get('NODE_ENV') === 'development') {
    bootstrapLogger.warn(`Development mode active`);
    app.enableCors({ origin: 'http://localhost:3000', credentials: true });
  } else
    app.enableCors({
      origin: [
        'https://kpbookstore.ddns.net/graphql',
        'https://kpbookstore.ddns.net/',
        'https://kpbookstore.ddns.net',
      ],
      credentials: true,
    });
  app.set('trust proxy', 1);

  const config = new DocumentBuilder()
    .setTitle('KPookStore')
    .setDescription(description)
    .setVersion('0.1')
    .addCookieAuth('optional-session-id')
    .build();

  const document = SwaggerModule.createDocument(app, config, {});

  SwaggerModule.setup(
    configService.get('HTTP_SWAGGER_DOCS_PREFIX'),
    app,
    document,
  );

  const port = configService.get('PORT');

  await app
    .listen(port, '0.0.0.0')
    .then(() => bootstrapLogger.log(`Nestway is listening on port ${port}`));
}
bootstrap();
