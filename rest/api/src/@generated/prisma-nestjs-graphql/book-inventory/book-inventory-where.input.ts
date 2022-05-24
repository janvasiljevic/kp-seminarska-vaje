import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookRelationFilter } from '../book/book-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookStoreRelationFilter } from '../book-store/book-store-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class BookInventoryWhereInput {
  @Field(() => [BookInventoryWhereInput], { nullable: true })
  AND?: Array<BookInventoryWhereInput>;

  @Field(() => [BookInventoryWhereInput], { nullable: true })
  OR?: Array<BookInventoryWhereInput>;

  @Field(() => [BookInventoryWhereInput], { nullable: true })
  NOT?: Array<BookInventoryWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;

  @Field(() => BookStoreRelationFilter, { nullable: true })
  bookStore?: BookStoreRelationFilter;

  @Field(() => FloatFilter, { nullable: true })
  price?: FloatFilter;

  @Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookStoreId?: StringFilter;
}
