import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
  authors = 'authors',
  averageRating = 'averageRating',
  isbn = 'isbn',
  isbn13 = 'isbn13',
  languageCode = 'languageCode',
  numOfPages = 'numOfPages',
  ratingsCount = 'ratingsCount',
  textReviews = 'textReviews',
}

registerEnumType(BookScalarFieldEnum, {
  name: 'BookScalarFieldEnum',
  description: undefined,
});
