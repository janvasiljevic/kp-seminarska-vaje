import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { BookOrderByWithAggregationInput } from './book-order-by-with-aggregation.input';
import { BookScalarFieldEnum } from './book-scalar-field.enum';
import { BookScalarWhereWithAggregatesInput } from './book-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookCountAggregateInput } from './book-count-aggregate.input';
import { BookAvgAggregateInput } from './book-avg-aggregate.input';
import { BookSumAggregateInput } from './book-sum-aggregate.input';
import { BookMinAggregateInput } from './book-min-aggregate.input';
import { BookMaxAggregateInput } from './book-max-aggregate.input';

@ArgsType()
export class BookGroupByArgs {
  @Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput;

  @Field(() => [BookOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BookOrderByWithAggregationInput>;

  @Field(() => [BookScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BookScalarFieldEnum>;

  @Field(() => BookScalarWhereWithAggregatesInput, { nullable: true })
  having?: BookScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BookCountAggregateInput, { nullable: true })
  _count?: BookCountAggregateInput;

  @Field(() => BookAvgAggregateInput, { nullable: true })
  _avg?: BookAvgAggregateInput;

  @Field(() => BookSumAggregateInput, { nullable: true })
  _sum?: BookSumAggregateInput;

  @Field(() => BookMinAggregateInput, { nullable: true })
  _min?: BookMinAggregateInput;

  @Field(() => BookMaxAggregateInput, { nullable: true })
  _max?: BookMaxAggregateInput;
}
