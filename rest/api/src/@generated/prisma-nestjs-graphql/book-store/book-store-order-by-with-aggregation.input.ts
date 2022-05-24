import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookStoreCountOrderByAggregateInput } from './book-store-count-order-by-aggregate.input';
import { BookStoreAvgOrderByAggregateInput } from './book-store-avg-order-by-aggregate.input';
import { BookStoreMaxOrderByAggregateInput } from './book-store-max-order-by-aggregate.input';
import { BookStoreMinOrderByAggregateInput } from './book-store-min-order-by-aggregate.input';
import { BookStoreSumOrderByAggregateInput } from './book-store-sum-order-by-aggregate.input';

@InputType()
export class BookStoreOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  totalProfit?: keyof typeof SortOrder;

  @Field(() => BookStoreCountOrderByAggregateInput, { nullable: true })
  _count?: BookStoreCountOrderByAggregateInput;

  @Field(() => BookStoreAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookStoreAvgOrderByAggregateInput;

  @Field(() => BookStoreMaxOrderByAggregateInput, { nullable: true })
  _max?: BookStoreMaxOrderByAggregateInput;

  @Field(() => BookStoreMinOrderByAggregateInput, { nullable: true })
  _min?: BookStoreMinOrderByAggregateInput;

  @Field(() => BookStoreSumOrderByAggregateInput, { nullable: true })
  _sum?: BookStoreSumOrderByAggregateInput;
}
