import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookCountAggregate } from './book-count-aggregate.output';
import { BookAvgAggregate } from './book-avg-aggregate.output';
import { BookSumAggregate } from './book-sum-aggregate.output';
import { BookMinAggregate } from './book-min-aggregate.output';
import { BookMaxAggregate } from './book-max-aggregate.output';

@ObjectType()
export class BookGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  authors!: string;

  @Field(() => Float, { nullable: false })
  averageRating!: number;

  @Field(() => String, { nullable: false })
  isbn!: string;

  @Field(() => String, { nullable: false })
  isbn13!: string;

  @Field(() => String, { nullable: false })
  languageCode!: string;

  @Field(() => Int, { nullable: false })
  numOfPages!: number;

  @Field(() => Int, { nullable: false })
  ratingsCount!: number;

  @Field(() => Int, { nullable: false })
  textReviews!: number;

  @Field(() => BookCountAggregate, { nullable: true })
  _count?: BookCountAggregate;

  @Field(() => BookAvgAggregate, { nullable: true })
  _avg?: BookAvgAggregate;

  @Field(() => BookSumAggregate, { nullable: true })
  _sum?: BookSumAggregate;

  @Field(() => BookMinAggregate, { nullable: true })
  _min?: BookMinAggregate;

  @Field(() => BookMaxAggregate, { nullable: true })
  _max?: BookMaxAggregate;
}
