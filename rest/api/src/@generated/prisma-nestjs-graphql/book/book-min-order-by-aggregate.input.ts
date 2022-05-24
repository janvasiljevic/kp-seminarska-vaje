import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  authors?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isbn?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isbn13?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  languageCode?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  numOfPages?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  textReviews?: keyof typeof SortOrder;
}
