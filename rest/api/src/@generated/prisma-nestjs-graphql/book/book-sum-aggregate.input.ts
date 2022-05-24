import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  averageRating?: true;

  @Field(() => Boolean, { nullable: true })
  numOfPages?: true;

  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;

  @Field(() => Boolean, { nullable: true })
  textReviews?: true;
}
