import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreCreateWithoutBooksSoldInput } from './book-store-create-without-books-sold.input';
import { BookStoreCreateOrConnectWithoutBooksSoldInput } from './book-store-create-or-connect-without-books-sold.input';
import { BookStoreUpsertWithoutBooksSoldInput } from './book-store-upsert-without-books-sold.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { BookStoreUpdateWithoutBooksSoldInput } from './book-store-update-without-books-sold.input';

@InputType()
export class BookStoreUpdateOneRequiredWithoutBooksSoldInput {
  @Field(() => BookStoreCreateWithoutBooksSoldInput, { nullable: true })
  create?: BookStoreCreateWithoutBooksSoldInput;

  @Field(() => BookStoreCreateOrConnectWithoutBooksSoldInput, {
    nullable: true,
  })
  connectOrCreate?: BookStoreCreateOrConnectWithoutBooksSoldInput;

  @Field(() => BookStoreUpsertWithoutBooksSoldInput, { nullable: true })
  upsert?: BookStoreUpsertWithoutBooksSoldInput;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  connect?: BookStoreWhereUniqueInput;

  @Field(() => BookStoreUpdateWithoutBooksSoldInput, { nullable: true })
  update?: BookStoreUpdateWithoutBooksSoldInput;
}
