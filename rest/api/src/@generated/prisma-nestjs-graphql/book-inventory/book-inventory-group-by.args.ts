import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereInput } from './book-inventory-where.input';
import { BookInventoryOrderByWithAggregationInput } from './book-inventory-order-by-with-aggregation.input';
import { BookInventoryScalarFieldEnum } from './book-inventory-scalar-field.enum';
import { BookInventoryScalarWhereWithAggregatesInput } from './book-inventory-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookInventoryCountAggregateInput } from './book-inventory-count-aggregate.input';
import { BookInventoryAvgAggregateInput } from './book-inventory-avg-aggregate.input';
import { BookInventorySumAggregateInput } from './book-inventory-sum-aggregate.input';
import { BookInventoryMinAggregateInput } from './book-inventory-min-aggregate.input';
import { BookInventoryMaxAggregateInput } from './book-inventory-max-aggregate.input';

@ArgsType()
export class BookInventoryGroupByArgs {
  @Field(() => BookInventoryWhereInput, { nullable: true })
  where?: BookInventoryWhereInput;

  @Field(() => [BookInventoryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BookInventoryOrderByWithAggregationInput>;

  @Field(() => [BookInventoryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BookInventoryScalarFieldEnum>;

  @Field(() => BookInventoryScalarWhereWithAggregatesInput, { nullable: true })
  having?: BookInventoryScalarWhereWithAggregatesInput;

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
