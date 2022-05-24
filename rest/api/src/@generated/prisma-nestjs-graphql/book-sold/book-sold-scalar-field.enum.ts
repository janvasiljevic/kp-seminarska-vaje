import { registerEnumType } from '@nestjs/graphql';

export enum BookSoldScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  profit = 'profit',
  soldBy = 'soldBy',
  bookId = 'bookId',
  bookStoreId = 'bookStoreId',
}

registerEnumType(BookSoldScalarFieldEnum, {
  name: 'BookSoldScalarFieldEnum',
  description: undefined,
});
