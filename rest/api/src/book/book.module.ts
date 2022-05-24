import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookResolver } from './book.resolver';

@Module({
  controllers: [BookController],
  providers: [BookService, BookResolver],
})
export class BookModule {}
