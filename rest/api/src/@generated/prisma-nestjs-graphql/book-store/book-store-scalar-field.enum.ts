import { registerEnumType } from '@nestjs/graphql';

export enum BookStoreScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
  email = 'email',
  phoneNumber = 'phoneNumber',
  url = 'url',
  totalProfit = 'totalProfit',
}

registerEnumType(BookStoreScalarFieldEnum, {
  name: 'BookStoreScalarFieldEnum',
  description: undefined,
});
