import { Module } from '@nestjs/common';
import { BookStoreService } from './book-store.service';
import { BookStoreController } from './book-store.controller';
import { BookStoreResolver } from './book-store.resolver';
import { AppModule } from 'src/app.module';
import { PubSub } from 'graphql-subscriptions';

@Module({
  controllers: [BookStoreController],
  providers: [
    BookStoreService,
    BookStoreResolver,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class BookStoreModule {}
