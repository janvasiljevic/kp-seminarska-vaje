import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BookInventoryCountAggregate } from './book-inventory-count-aggregate.output';
import { BookInventoryAvgAggregate } from './book-inventory-avg-aggregate.output';
import { BookInventorySumAggregate } from './book-inventory-sum-aggregate.output';
import { BookInventoryMinAggregate } from './book-inventory-min-aggregate.output';
import { BookInventoryMaxAggregate } from './book-inventory-max-aggregate.output';

@ObjectType()
export class BookInventoryGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Float, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  bookId!: string;

  @Field(() => String, { nullable: false })
  bookStoreId!: string;

  @Field(() => BookInventoryCountAggregate, { nullable: true })
  _count?: BookInventoryCountAggregate;

  @Field(() => BookInventoryAvgAggregate, { nullable: true })
  _avg?: BookInventoryAvgAggregate;

  @Field(() => BookInventorySumAggregate, { nullable: true })
  _sum?: BookInventorySumAggregate;

  @Field(() => BookInventoryMinAggregate, { nullable: true })
  _min?: BookInventoryMinAggregate;

  @Field(() => BookInventoryMaxAggregate, { nullable: true })
  _max?: BookInventoryMaxAggregate;
}
