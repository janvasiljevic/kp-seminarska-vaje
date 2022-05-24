import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookInventoryCreateNestedManyWithoutBookInput } from '../book-inventory/book-inventory-create-nested-many-without-book.input';
import { BookSoldCreateNestedManyWithoutBookInput } from '../book-sold/book-sold-create-nested-many-without-book.input';

@InputType()
export class BookCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

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

  @Field(() => BookInventoryCreateNestedManyWithoutBookInput, {
    nullable: true,
  })
  BookDisplay?: BookInventoryCreateNestedManyWithoutBookInput;

  @Field(() => BookSoldCreateNestedManyWithoutBookInput, { nullable: true })
  SoldBook?: BookSoldCreateNestedManyWithoutBookInput;
}
