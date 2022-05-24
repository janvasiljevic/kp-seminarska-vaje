import { ApiProperty } from '@nestjs/swagger';
import { CreateBookInventoryDto } from './create-book-inventory.dto';

export class CreateBookInventoryRelationDto extends CreateBookInventoryDto {
  @ApiProperty({ example: 'CUID' })
  bookStoreId: string;

  @ApiProperty({ example: 'CUID' })
  bookId: string;
}
