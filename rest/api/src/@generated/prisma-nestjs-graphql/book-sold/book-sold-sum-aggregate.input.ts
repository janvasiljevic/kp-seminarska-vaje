import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookSoldSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  profit?: true;
}
