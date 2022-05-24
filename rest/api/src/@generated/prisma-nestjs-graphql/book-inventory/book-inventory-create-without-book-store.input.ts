import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedOneWithoutBookDisplayInput } from '../book/book-create-nested-one-without-book-display.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookInventoryCreateWithoutBookStoreInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BookCreateNestedOneWithoutBookDisplayInput, { nullable: false })
  book!: BookCreateNestedOneWithoutBookDisplayInput;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Float, { nullable: false })
  price!: number;
}
