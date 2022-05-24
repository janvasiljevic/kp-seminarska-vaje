import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { BookStoreOrderByWithRelationInput } from '../book-store/book-store-order-by-with-relation.input';

@InputType()
export class BookInventoryOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => BookOrderByWithRelationInput, { nullable: true })
  book?: BookOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  count?: keyof typeof SortOrder;

  @Field(() => BookStoreOrderByWithRelationInput, { nullable: true })
  bookStore?: BookStoreOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  bookStoreId?: keyof typeof SortOrder;
}
