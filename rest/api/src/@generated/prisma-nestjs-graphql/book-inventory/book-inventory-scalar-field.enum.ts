import { registerEnumType } from '@nestjs/graphql';

export enum BookInventoryScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  count = 'count',
  price = 'price',
  bookId = 'bookId',
  bookStoreId = 'bookStoreId',
}

registerEnumType(BookInventoryScalarFieldEnum, {
  name: 'BookInventoryScalarFieldEnum',
  description: undefined,
});
