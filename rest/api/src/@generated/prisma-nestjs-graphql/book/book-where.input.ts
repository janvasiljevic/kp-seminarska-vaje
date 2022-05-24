import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookInventoryListRelationFilter } from '../book-inventory/book-inventory-list-relation-filter.input';
import { BookSoldListRelationFilter } from '../book-sold/book-sold-list-relation-filter.input';

@InputType()
export class BookWhereInput {
  @Field(() => [BookWhereInput], { nullable: true })
  AND?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  OR?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  NOT?: Array<BookWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  authors?: StringFilter;

  @Field(() => FloatFilter, { nullable: true })
  averageRating?: FloatFilter;

  @Field(() => StringFilter, { nullable: true })
  isbn?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  isbn13?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  languageCode?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  numOfPages?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  ratingsCount?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  textReviews?: IntFilter;

  @Field(() => BookInventoryListRelationFilter, { nullable: true })
  BookDisplay?: BookInventoryListRelationFilter;

  @Field(() => BookSoldListRelationFilter, { nullable: true })
  SoldBook?: BookSoldListRelationFilter;
}
