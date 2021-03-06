import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class BookSoldScalarWhereWithAggregatesInput {
  @Field(() => [BookSoldScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BookSoldScalarWhereWithAggregatesInput>;

  @Field(() => [BookSoldScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BookSoldScalarWhereWithAggregatesInput>;

  @Field(() => [BookSoldScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BookSoldScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  profit?: FloatWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  soldBy?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bookId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bookStoreId?: StringWithAggregatesFilter;
}
