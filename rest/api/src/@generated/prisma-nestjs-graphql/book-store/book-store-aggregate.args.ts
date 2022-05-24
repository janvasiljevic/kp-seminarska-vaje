import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereInput } from './book-store-where.input';
import { BookStoreOrderByWithRelationInput } from './book-store-order-by-with-relation.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookStoreCountAggregateInput } from './book-store-count-aggregate.input';
import { BookStoreAvgAggregateInput } from './book-store-avg-aggregate.input';
import { BookStoreSumAggregateInput } from './book-store-sum-aggregate.input';
import { BookStoreMinAggregateInput } from './book-store-min-aggregate.input';
import { BookStoreMaxAggregateInput } from './book-store-max-aggregate.input';

@ArgsType()
export class BookStoreAggregateArgs {
  @Field(() => BookStoreWhereInput, { nullable: true })
  where?: BookStoreWhereInput;

  @Field(() => [BookStoreOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookStoreOrderByWithRelationInput>;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  cursor?: BookStoreWhereUniqueInput;

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
