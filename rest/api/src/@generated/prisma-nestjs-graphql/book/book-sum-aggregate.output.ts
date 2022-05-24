import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookSumAggregate {
  @Field(() => Float, { nullable: true })
  averageRating?: number;

  @Field(() => Int, { nullable: true })
  numOfPages?: number;

  @Field(() => Int, { nullable: true })
  ratingsCount?: number;

  @Field(() => Int, { nullable: true })
  textReviews?: number;
}
