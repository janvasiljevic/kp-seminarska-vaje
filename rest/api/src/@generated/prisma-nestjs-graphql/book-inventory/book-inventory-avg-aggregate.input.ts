import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookInventoryAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  count?: true;

  @Field(() => Boolean, { nullable: true })
  price?: true;
}
