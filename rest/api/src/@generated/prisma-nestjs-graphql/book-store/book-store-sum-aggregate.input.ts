import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookStoreSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  totalProfit?: true;
}
