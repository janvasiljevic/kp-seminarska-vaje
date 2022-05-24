import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  averageRating?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  numOfPages?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ratingsCount?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  textReviews?: keyof typeof SortOrder;
}
