import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class BookInventoryScalarWhereWithAggregatesInput {
  @Field(() => [BookInventoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<BookInventoryScalarWhereWithAggregatesInput>;

  @Field(() => [BookInventoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<BookInventoryScalarWhereWithAggregatesInput>;

  @Field(() => [BookInventoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<BookInventoryScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  count?: IntWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  price?: FloatWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bookId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bookStoreId?: StringWithAggregatesFilter;
}
