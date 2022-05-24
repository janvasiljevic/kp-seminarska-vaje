import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookInventorySumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}
