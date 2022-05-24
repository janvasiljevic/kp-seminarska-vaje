import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereInput } from './book-store-where.input';
import { BookStoreOrderByWithAggregationInput } from './book-store-order-by-with-aggregation.input';
import { BookStoreScalarFieldEnum } from './book-store-scalar-field.enum';
import { BookStoreScalarWhereWithAggregatesInput } from './book-store-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookStoreCountAggregateInput } from './book-store-count-aggregate.input';
import { BookStoreAvgAggregateInput } from './book-store-avg-aggregate.input';
import { BookStoreSumAggregateInput } from './book-store-sum-aggregate.input';
import { BookStoreMinAggregateInput } from './book-store-min-aggregate.input';
import { BookStoreMaxAggregateInput } from './book-store-max-aggregate.input';

@ArgsType()
export class BookStoreGroupByArgs {
  @Field(() => BookStoreWhereInput, { nullable: true })
  where?: BookStoreWhereInput;

  @Field(() => [BookStoreOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BookStoreOrderByWithAggregationInput>;

  @Field(() => [BookStoreScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BookStoreScalarFieldEnum>;

  @Field(() => BookStoreScalarWhereWithAggregatesInput, { nullable: true })
  having?: BookStoreScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BookStoreCountAggregateInput, { nullable: true })
  _count?: BookStoreCountAggregateInput;

  @Field(() => BookStoreAvgAggregateInput, { nullable: true })
  _avg?: BookStoreAvgAggregateInput;

  @Field(() => BookStoreSumAggregateInput, { nullable: true })
  _sum?: BookStoreSumAggregateInput;

  @Field(() => BookStoreMinAggregateInput, { nullable: true })
  _min?: BookStoreMinAggregateInput;

  @Field(() => BookStoreMaxAggregateInput, { nullable: true })
  _max?: BookStoreMaxAggregateInput;
}
