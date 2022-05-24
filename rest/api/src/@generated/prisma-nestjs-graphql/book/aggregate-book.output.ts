import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookCountAggregate } from './book-count-aggregate.output';
import { BookAvgAggregate } from './book-avg-aggregate.output';
import { BookSumAggregate } from './book-sum-aggregate.output';
import { BookMinAggregate } from './book-min-aggregate.output';
import { BookMaxAggregate } from './book-max-aggregate.output';

@ObjectType()
export class AggregateBook {
  @Field(() => BookCountAggregate, { nullable: true })
  _count?: BookCountAggregate;

  @Field(() => BookAvgAggregate, { nullable: true })
  _avg?: BookAvgAggregate;

  @Field(() => BookSumAggregate, { nullable: true })
  _sum?: BookSumAggregate;

  @Field(() => BookMinAggregate, { nullable: true })
  _min?: BookMinAggregate;

  @Field(() => BookMaxAggregate, { nullable: true })
  _max?: BookMaxAggregate;
}
