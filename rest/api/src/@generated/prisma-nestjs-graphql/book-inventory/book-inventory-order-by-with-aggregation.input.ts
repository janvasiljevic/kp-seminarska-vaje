import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookInventoryCountOrderByAggregateInput } from './book-inventory-count-order-by-aggregate.input';
import { BookInventoryAvgOrderByAggregateInput } from './book-inventory-avg-order-by-aggregate.input';
import { BookInventoryMaxOrderByAggregateInput } from './book-inventory-max-order-by-aggregate.input';
import { BookInventoryMinOrderByAggregateInput } from './book-inventory-min-order-by-aggregate.input';
import { BookInventorySumOrderByAggregateInput } from './book-inventory-sum-order-by-aggregate.input';

@InputType()
export class BookInventoryOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookStoreId?: keyof typeof SortOrder;

  @Field(() => BookInventoryCountOrderByAggregateInput, { nullable: true })
  _count?: BookInventoryCountOrderByAggregateInput;

  @Field(() => BookInventoryAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookInventoryAvgOrderByAggregateInput;

  @Field(() => BookInventoryMaxOrderByAggregateInput, { nullable: true })
  _max?: BookInventoryMaxOrderByAggregateInput;

  @Field(() => BookInventoryMinOrderByAggregateInput, { nullable: true })
  _min?: BookInventoryMinOrderByAggregateInput;

  @Field(() => BookInventorySumOrderByAggregateInput, { nullable: true })
  _sum?: BookInventorySumOrderByAggregateInput;
}
