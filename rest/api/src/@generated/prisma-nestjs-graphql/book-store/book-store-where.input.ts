import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookInventoryListRelationFilter } from '../book-inventory/book-inventory-list-relation-filter.input';
import { BookSoldListRelationFilter } from '../book-sold/book-sold-list-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class BookStoreWhereInput {
  @Field(() => [BookStoreWhereInput], { nullable: true })
  AND?: Array<BookStoreWhereInput>;

  @Field(() => [BookStoreWhereInput], { nullable: true })
  OR?: Array<BookStoreWhereInput>;

  @Field(() => [BookStoreWhereInput], { nullable: true })
  NOT?: Array<BookStoreWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;

  @Field(() => BookInventoryListRelationFilter, { nullable: true })
  bookInventory?: BookInventoryListRelationFilter;

  @Field(() => BookSoldListRelationFilter, { nullable: true })
  booksSold?: BookSoldListRelationFilter;

  @Field(() => FloatFilter, { nullable: true })
  totalProfit?: FloatFilter;
}
