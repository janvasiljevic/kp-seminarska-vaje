import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { BookStoreCreateWithoutBooksSoldInput } from './book-store-create-without-books-sold.input';

@InputType()
export class BookStoreCreateOrConnectWithoutBooksSoldInput {
  @Field(() => BookStoreWhereUniqueInput, { nullable: false })
  where!: BookStoreWhereUniqueInput;

  @Field(() => BookStoreCreateWithoutBooksSoldInput, { nullable: false })
  create!: BookStoreCreateWithoutBooksSoldInput;
}
