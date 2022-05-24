import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookInventoryCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => Int, { nullable: false })
  bookId!: number;

  @Field(() => Int, { nullable: false })
  bookStoreId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
