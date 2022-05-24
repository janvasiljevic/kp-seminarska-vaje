import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereInput } from './book-sold-where.input';
import { BookSoldOrderByWithAggregationInput } from './book-sold-order-by-with-aggregation.input';
import { BookSoldScalarFieldEnum } from './book-sold-scalar-field.enum';
import { BookSoldScalarWhereWithAggregatesInput } from './book-sold-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookSoldCountAggregateInput } from './book-sold-count-aggregate.input';
import { BookSoldAvgAggregateInput } from './book-sold-avg-aggregate.input';
import { BookSoldSumAggregateInput } from './book-sold-sum-aggregate.input';
import { BookSoldMinAggregateInput } from './book-sold-min-aggregate.input';
import { BookSoldMaxAggregateInput } from './book-sold-max-aggregate.input';

@ArgsType()
export class BookSoldGroupByArgs {
  @Field(() => BookSoldWhereInput, { nullable: true })
  where?: BookSoldWhereInput;

  @Field(() => [BookSoldOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BookSoldOrderByWithAggregationInput>;

  @Field(() => [BookSoldScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BookSoldScalarFieldEnum>;

  @Field(() => BookSoldScalarWhereWithAggregatesInput, { nullable: true })
  having?: BookSoldScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BookSoldCountAggregateInput, { nullable: true })
  _count?: BookSoldCountAggregateInput;

  @Field(() => BookSoldAvgAggregateInput, { nullable: true })
  _avg?: BookSoldAvgAggregateInput;

  @Field(() => BookSoldSumAggregateInput, { nullable: true })
  _sum?: BookSoldSumAggregateInput;

  @Field(() => BookSoldMinAggregateInput, { nullable: true })
  _min?: BookSoldMinAggregateInput;

  @Field(() => BookSoldMaxAggregateInput, { nullable: true })
  _max?: BookSoldMaxAggregateInput;
}
