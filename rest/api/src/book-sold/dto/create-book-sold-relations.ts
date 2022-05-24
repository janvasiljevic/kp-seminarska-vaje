import { ApiProperty } from '@nestjs/swagger';
import { CreateBookSoldDto } from './create-book-sold.dto';

export class CreateBookSoldRelationsDto extends CreateBookSoldDto {
  @ApiProperty()
  bookStoreId: string;

  @ApiProperty()
  bookId: string;
}
