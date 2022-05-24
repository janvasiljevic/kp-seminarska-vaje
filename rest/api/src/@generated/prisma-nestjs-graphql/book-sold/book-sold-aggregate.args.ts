import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereInput } from './book-sold-where.input';
import { BookSoldOrderByWithRelationInput } from './book-sold-order-by-with-relation.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookSoldCountAggregateInput } from './book-sold-count-aggregate.input';
import { BookSoldAvgAggregateInput } from './book-sold-avg-aggregate.input';
import { BookSoldSumAggregateInput } from './book-sold-sum-aggregate.input';
import { BookSoldMinAggregateInput } from './book-sold-min-aggregate.input';
import { BookSoldMaxAggregateInput } from './book-sold-max-aggregate.input';

@ArgsType()
export class BookSoldAggregateArgs {
  @Field(() => BookSoldWhereInput, { nullable: true })
  where?: BookSoldWhereInput;

  @Field(() => [BookSoldOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookSoldOrderByWithRelationInput>;

  @Field(() => BookSoldWhereUniqueInput, { nullable: true })
  cursor?: BookSoldWhereUniqueInput;

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
