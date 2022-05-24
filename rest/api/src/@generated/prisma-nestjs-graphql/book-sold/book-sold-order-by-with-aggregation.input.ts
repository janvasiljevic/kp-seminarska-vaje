import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookSoldCountOrderByAggregateInput } from './book-sold-count-order-by-aggregate.input';
import { BookSoldAvgOrderByAggregateInput } from './book-sold-avg-order-by-aggregate.input';
import { BookSoldMaxOrderByAggregateInput } from './book-sold-max-order-by-aggregate.input';
import { BookSoldMinOrderByAggregateInput } from './book-sold-min-order-by-aggregate.input';
import { BookSoldSumOrderByAggregateInput } from './book-sold-sum-order-by-aggregate.input';

@InputType()
export class BookSoldOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  profit?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  soldBy?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookStoreId?: keyof typeof SortOrder;

  @Field(() => BookSoldCountOrderByAggregateInput, { nullable: true })
  _count?: BookSoldCountOrderByAggregateInput;

  @Field(() => BookSoldAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookSoldAvgOrderByAggregateInput;

  @Field(() => BookSoldMaxOrderByAggregateInput, { nullable: true })
  _max?: BookSoldMaxOrderByAggregateInput;

  @Field(() => BookSoldMinOrderByAggregateInput, { nullable: true })
  _min?: BookSoldMinOrderByAggregateInput;

  @Field(() => BookSoldSumOrderByAggregateInput, { nullable: true })
  _sum?: BookSoldSumOrderByAggregateInput;
}
