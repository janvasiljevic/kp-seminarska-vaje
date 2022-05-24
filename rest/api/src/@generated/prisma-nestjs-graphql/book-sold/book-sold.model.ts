import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { BookStore } from '../book-store/book-store.model';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookSold {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Book, { nullable: false })
  book?: Book;

  @Field(() => BookStore, { nullable: false })
  bookStore?: BookStore;

  /**
   * Profit we sold the book at
   */
  @Field(() => Float, {
    nullable: false,
    description: 'Profit we sold the book at',
  })
  profit!: number;

  @Field(() => String, { nullable: false })
  soldBy!: string;

  @Field(() => String, { nullable: false })
  bookId!: string;

  @Field(() => String, { nullable: false })
  bookStoreId!: string;
}
