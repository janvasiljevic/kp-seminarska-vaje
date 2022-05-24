import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookSoldAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  profit?: keyof typeof SortOrder;
}
