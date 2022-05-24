import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookSoldSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  profit?: keyof typeof SortOrder;
}
