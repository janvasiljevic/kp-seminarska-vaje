import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BookInventory } from '../book-inventory/book-inventory.model';
import { BookSold } from '../book-sold/book-sold.model';
import { Float } from '@nestjs/graphql';
import { BookStoreCount } from './book-store-count.output';

@ObjectType()
export class BookStore {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => [BookInventory], { nullable: true })
  bookInventory?: Array<BookInventory>;

  @Field(() => [BookSold], { nullable: true })
  booksSold?: Array<BookSold>;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  totalProfit!: number;

  @Field(() => BookStoreCount, { nullable: false })
  _count?: BookStoreCount;
}
