import { Module } from '@nestjs/common';
import { BookSoldService } from './book-sold.service';
import { BookSoldController } from './book-sold.controller';
import { BookSoldResolver } from './book-sold.resolver';

@Module({
  controllers: [BookSoldController],
  providers: [BookSoldService, BookSoldResolver],
})
export class BookSoldModule {}
