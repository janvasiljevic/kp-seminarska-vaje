import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookSoldCountAggregate } from './book-sold-count-aggregate.output';
import { BookSoldAvgAggregate } from './book-sold-avg-aggregate.output';
import { BookSoldSumAggregate } from './book-sold-sum-aggregate.output';
import { BookSoldMinAggregate } from './book-sold-min-aggregate.output';
import { BookSoldMaxAggregate } from './book-sold-max-aggregate.output';

@ObjectType()
export class AggregateBookSold {
  @Field(() => BookSoldCountAggregate, { nullable: true })
  _count?: BookSoldCountAggregate;

  @Field(() => BookSoldAvgAggregate, { nullable: true })
  _avg?: BookSoldAvgAggregate;

  @Field(() => BookSoldSumAggregate, { nullable: true })
  _sum?: BookSoldSumAggregate;

  @Field(() => BookSoldMinAggregate, { nullable: true })
  _min?: BookSoldMinAggregate;

  @Field(() => BookSoldMaxAggregate, { nullable: true })
  _max?: BookSoldMaxAggregate;
}
