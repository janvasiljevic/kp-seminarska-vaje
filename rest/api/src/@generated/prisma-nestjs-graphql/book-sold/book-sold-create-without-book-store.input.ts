import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedOneWithoutSoldBookInput } from '../book/book-create-nested-one-without-sold-book.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookSoldCreateWithoutBookStoreInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BookCreateNestedOneWithoutSoldBookInput, { nullable: false })
  book!: BookCreateNestedOneWithoutSoldBookInput;

  @Field(() => Float, { nullable: false })
  profit!: number;

  @Field(() => String, { nullable: false })
  soldBy!: string;
}
