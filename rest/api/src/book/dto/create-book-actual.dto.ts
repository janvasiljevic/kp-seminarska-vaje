import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Francek' })
  title: string;

  @ApiProperty({ example: 'France Presern' })
  authors: string;

  @ApiProperty({ example: 3.4 })
  averageRating: number;

  @ApiProperty({ example: '0439554896' })
  isbn: string;

  @ApiProperty({ example: '9780439554893' })
  isbn13: string;

  @ApiProperty({ example: 'eng' })
  languageCode: string;

  @ApiProperty({ example: 3213 })
  numOfPages: number;

  @ApiProperty({ example: 123 })
  ratingsCount: number;

  @ApiProperty({ example: 321321 })
  textReviews: number;
}
