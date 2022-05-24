import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookStoreCountAggregate } from './book-store-count-aggregate.output';
import { BookStoreAvgAggregate } from './book-store-avg-aggregate.output';
import { BookStoreSumAggregate } from './book-store-sum-aggregate.output';
import { BookStoreMinAggregate } from './book-store-min-aggregate.output';
import { BookStoreMaxAggregate } from './book-store-max-aggregate.output';

@ObjectType()
export class AggregateBookStore {
  @Field(() => BookStoreCountAggregate, { nullable: true })
  _count?: BookStoreCountAggregate;

  @Field(() => BookStoreAvgAggregate, { nullable: true })
  _avg?: BookStoreAvgAggregate;

  @Field(() => BookStoreSumAggregate, { nullable: true })
  _sum?: BookStoreSumAggregate;

  @Field(() => BookStoreMinAggregate, { nullable: true })
  _min?: BookStoreMinAggregate;

  @Field(() => BookStoreMaxAggregate, { nullable: true })
  _max?: BookStoreMaxAggregate;
}
