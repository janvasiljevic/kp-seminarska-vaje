import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookStoreAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  totalProfit?: keyof typeof SortOrder;
}
