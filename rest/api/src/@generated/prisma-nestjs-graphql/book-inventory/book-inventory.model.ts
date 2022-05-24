import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { Int } from '@nestjs/graphql';
import { BookStore } from '../book-store/book-store.model';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookInventory {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Book, { nullable: false })
  book?: Book;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => BookStore, { nullable: false })
  bookStore?: BookStore;

  @Field(() => Float, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  bookId!: string;

  @Field(() => String, { nullable: false })
  bookStoreId!: string;
}
