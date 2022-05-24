import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookStoreCount {
  @Field(() => Int, { nullable: false })
  bookInventory?: number;

  @Field(() => Int, { nullable: false })
  booksSold?: number;
}
