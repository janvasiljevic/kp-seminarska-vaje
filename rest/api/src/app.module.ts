import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import * as session from 'express-session';
import * as passport from 'passport';
import { AuthModule } from './auth/auth.module';
import { BookInventoryModule } from './book-inventory/book-inventory.module';
import { BookSoldModule } from './book-sold/book-sold.module';
import { BookStoreModule } from './book-store/book-store.module';
import { BookModule } from './book/book.module';
import { validate } from './config/env.validation';
import { PrismaModule } from './shared/prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // introspection: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: '~schema.gql',
      playground: true,
      introspection: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),

    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.production'],
      validate,
      isGlobal: true,
    }),

    AuthModule,
    PrismaModule,
    BookModule,
    BookStoreModule,
    BookInventoryModule,
    BookSoldModule,
    PrometheusModule.register(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new session.MemoryStore(),
          saveUninitialized: false,
          secret: this.configService.get<string>('COOKIE_SECRET'),
          resave: false,
          // proxy: true,
          cookie: {
            secure: false,
            sameSite: false,
            httpOnly: true,
            maxAge: 60 * 1000 * 10, // 10 minute
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
