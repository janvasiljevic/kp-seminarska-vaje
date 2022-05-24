import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookSoldMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  profit?: true;

  @Field(() => Boolean, { nullable: true })
  soldBy?: true;

  @Field(() => Boolean, { nullable: true })
  bookId?: true;

  @Field(() => Boolean, { nullable: true })
  bookStoreId?: true;
}
