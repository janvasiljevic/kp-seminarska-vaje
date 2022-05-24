import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookRelationFilter } from '../book/book-relation-filter.input';
import { BookStoreRelationFilter } from '../book-store/book-store-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class BookSoldWhereInput {
  @Field(() => [BookSoldWhereInput], { nullable: true })
  AND?: Array<BookSoldWhereInput>;

  @Field(() => [BookSoldWhereInput], { nullable: true })
  OR?: Array<BookSoldWhereInput>;

  @Field(() => [BookSoldWhereInput], { nullable: true })
  NOT?: Array<BookSoldWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter;

  @Field(() => BookStoreRelationFilter, { nullable: true })
  bookStore?: BookStoreRelationFilter;

  @Field(() => FloatFilter, { nullable: true })
  profit?: FloatFilter;

  @Field(() => StringFilter, { nullable: true })
  soldBy?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookStoreId?: StringFilter;
}
