import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  title!: number;

  @Field(() => Int, { nullable: false })
  authors!: number;

  @Field(() => Int, { nullable: false })
  averageRating!: number;

  @Field(() => Int, { nullable: false })
  isbn!: number;

  @Field(() => Int, { nullable: false })
  isbn13!: number;

  @Field(() => Int, { nullable: false })
  languageCode!: number;

  @Field(() => Int, { nullable: false })
  numOfPages!: number;

  @Field(() => Int, { nullable: false })
  ratingsCount!: number;

  @Field(() => Int, { nullable: false })
  textReviews!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
