import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class BookStoreScalarWhereWithAggregatesInput {
  @Field(() => [BookStoreScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BookStoreScalarWhereWithAggregatesInput>;

  @Field(() => [BookStoreScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BookStoreScalarWhereWithAggregatesInput>;

  @Field(() => [BookStoreScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BookStoreScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  url?: StringWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  totalProfit?: FloatWithAggregatesFilter;
}
