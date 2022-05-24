import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreUpdateWithoutBooksSoldInput } from './book-store-update-without-books-sold.input';
import { BookStoreCreateWithoutBooksSoldInput } from './book-store-create-without-books-sold.input';

@InputType()
export class BookStoreUpsertWithoutBooksSoldInput {
  @Field(() => BookStoreUpdateWithoutBooksSoldInput, { nullable: false })
  update!: BookStoreUpdateWithoutBooksSoldInput;

  @Field(() => BookStoreCreateWithoutBooksSoldInput, { nullable: false })
  create!: BookStoreCreateWithoutBooksSoldInput;
}
