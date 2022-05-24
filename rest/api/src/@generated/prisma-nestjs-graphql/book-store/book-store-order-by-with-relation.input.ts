import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookInventoryOrderByRelationAggregateInput } from '../book-inventory/book-inventory-order-by-relation-aggregate.input';
import { BookSoldOrderByRelationAggregateInput } from '../book-sold/book-sold-order-by-relation-aggregate.input';

@InputType()
export class BookStoreOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder;

  @Field(() => BookInventoryOrderByRelationAggregateInput, { nullable: true })
  bookInventory?: BookInventoryOrderByRelationAggregateInput;

  @Field(() => BookSoldOrderByRelationAggregateInput, { nullable: true })
  booksSold?: BookSoldOrderByRelationAggregateInput;

  @Field(() => SortOrder, { nullable: true })
  totalProfit?: keyof typeof SortOrder;
}
