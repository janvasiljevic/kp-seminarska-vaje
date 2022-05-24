import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  authors?: string;

  @Field(() => Float, { nullable: true })
  averageRating?: number;

  @Field(() => String, { nullable: true })
  isbn?: string;

  @Field(() => String, { nullable: true })
  isbn13?: string;

  @Field(() => String, { nullable: true })
  languageCode?: string;

  @Field(() => Int, { nullable: true })
  numOfPages?: number;

  @Field(() => Int, { nullable: true })
  ratingsCount?: number;

  @Field(() => Int, { nullable: true })
  textReviews?: number;
}
