import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookInventory } from '../book-inventory/book-inventory.model';
import { BookSold } from '../book-sold/book-sold.model';
import { BookCount } from './book-count.output';

@ObjectType()
export class Book {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

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

  @Field(() => [BookInventory], { nullable: true })
  BookDisplay?: Array<BookInventory>;

  @Field(() => [BookSold], { nullable: true })
  SoldBook?: Array<BookSold>;

  @Field(() => BookCount, { nullable: false })
  _count?: BookCount;
}
