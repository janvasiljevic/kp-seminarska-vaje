import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  title?: true;

  @Field(() => Boolean, { nullable: true })
  authors?: true;

  @Field(() => Boolean, { nullable: true })
  averageRating?: true;

  @Field(() => Boolean, { nullable: true })
  isbn?: true;

  @Field(() => Boolean, { nullable: true })
  isbn13?: true;

  @Field(() => Boolean, { nullable: true })
  languageCode?: true;

  @Field(() => Boolean, { nullable: true })
  numOfPages?: true;

  @Field(() => Boolean, { nullable: true })
  ratingsCount?: true;

  @Field(() => Boolean, { nullable: true })
  textReviews?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
