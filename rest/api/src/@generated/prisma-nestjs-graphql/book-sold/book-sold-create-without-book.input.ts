import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreCreateNestedOneWithoutBooksSoldInput } from '../book-store/book-store-create-nested-one-without-books-sold.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookSoldCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => BookStoreCreateNestedOneWithoutBooksSoldInput, {
    nullable: false,
  })
  bookStore!: BookStoreCreateNestedOneWithoutBooksSoldInput;

  @Field(() => Float, { nullable: false })
  profit!: number;

  @Field(() => String, { nullable: false })
  soldBy!: string;
}
