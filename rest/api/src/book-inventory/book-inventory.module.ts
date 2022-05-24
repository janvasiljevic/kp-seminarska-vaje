import { Module } from '@nestjs/common';
import { BookInventoryService } from './book-inventory.service';
import { BookInventoryController } from './book-inventory.controller';
import { BookInventoryResolver } from './book-inventory.resolver';

@Module({
  controllers: [BookInventoryController],
  providers: [BookInventoryService, BookInventoryResolver],
})
export class BookInventoryModule {}
