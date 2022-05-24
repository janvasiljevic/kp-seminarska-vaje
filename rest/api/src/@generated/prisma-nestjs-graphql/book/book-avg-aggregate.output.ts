import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookAvgAggregate {
  @Field(() => Float, { nullable: true })
  averageRating?: number;

  @Field(() => Float, { nullable: true })
  numOfPages?: number;

  @Field(() => Float, { nullable: true })
  ratingsCount?: number;

  @Field(() => Float, { nullable: true })
  textReviews?: number;
}
