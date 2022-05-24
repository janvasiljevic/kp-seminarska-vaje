import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreCreateWithoutBooksSoldInput } from './book-store-create-without-books-sold.input';
import { BookStoreCreateOrConnectWithoutBooksSoldInput } from './book-store-create-or-connect-without-books-sold.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';

@InputType()
export class BookStoreCreateNestedOneWithoutBooksSoldInput {
  @Field(() => BookStoreCreateWithoutBooksSoldInput, { nullable: true })
  create?: BookStoreCreateWithoutBooksSoldInput;

  @Field(() => BookStoreCreateOrConnectWithoutBooksSoldInput, {
    nullable: true,
  })
  connectOrCreate?: BookStoreCreateOrConnectWithoutBooksSoldInput;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  connect?: BookStoreWhereUniqueInput;
}
