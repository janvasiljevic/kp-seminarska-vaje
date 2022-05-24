import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BookScalarWhereWithAggregatesInput {
  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BookScalarWhereWithAggregatesInput>;

  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BookScalarWhereWithAggregatesInput>;

  @Field(() => [BookScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BookScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authors?: StringWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  averageRating?: FloatWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  isbn?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  isbn13?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  languageCode?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  numOfPages?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  ratingsCount?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  textReviews?: IntWithAggregatesFilter;
}
