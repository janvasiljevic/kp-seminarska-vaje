import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookInventoryMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  count?: true;

  @Field(() => Boolean, { nullable: true })
  price?: true;

  @Field(() => Boolean, { nullable: true })
  bookId?: true;

  @Field(() => Boolean, { nullable: true })
  bookStoreId?: true;
}
