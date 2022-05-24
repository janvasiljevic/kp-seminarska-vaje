import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookStoreCreateNestedOneWithoutBookInventoryInput } from '../book-store/book-store-create-nested-one-without-book-inventory.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookInventoryCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => BookStoreCreateNestedOneWithoutBookInventoryInput, {
    nullable: false,
  })
  bookStore!: BookStoreCreateNestedOneWithoutBookInventoryInput;

  @Field(() => Float, { nullable: false })
  price!: number;
}
