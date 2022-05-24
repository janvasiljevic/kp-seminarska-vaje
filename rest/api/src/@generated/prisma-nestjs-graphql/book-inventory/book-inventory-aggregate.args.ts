import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereInput } from './book-inventory-where.input';
import { BookInventoryOrderByWithRelationInput } from './book-inventory-order-by-with-relation.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookInventoryCountAggregateInput } from './book-inventory-count-aggregate.input';
import { BookInventoryAvgAggregateInput } from './book-inventory-avg-aggregate.input';
import { BookInventorySumAggregateInput } from './book-inventory-sum-aggregate.input';
import { BookInventoryMinAggregateInput } from './book-inventory-min-aggregate.input';
import { BookInventoryMaxAggregateInput } from './book-inventory-max-aggregate.input';

@ArgsType()
export class BookInventoryAggregateArgs {
  @Field(() => BookInventoryWhereInput, { nullable: true })
  where?: BookInventoryWhereInput;

  @Field(() => [BookInventoryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookInventoryOrderByWithRelationInput>;

  @Field(() => BookInventoryWhereUniqueInput, { nullable: true })
  cursor?: BookInventoryWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => BookInventoryCountAggregateInput, { nullable: true })
  _count?: BookInventoryCountAggregateInput;

  @Field(() => BookInventoryAvgAggregateInput, { nullable: true })
  _avg?: BookInventoryAvgAggregateInput;

  @Field(() => BookInventorySumAggregateInput, { nullable: true })
  _sum?: BookInventorySumAggregateInput;

  @Field(() => BookInventoryMinAggregateInput, { nullable: true })
  _min?: BookInventoryMinAggregateInput;

  @Field(() => BookInventoryMaxAggregateInput, { nullable: true })
  _max?: BookInventoryMaxAggregateInput;
}
