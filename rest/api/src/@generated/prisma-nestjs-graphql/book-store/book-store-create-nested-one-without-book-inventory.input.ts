import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreCreateWithoutBookInventoryInput } from './book-store-create-without-book-inventory.input';
import { BookStoreCreateOrConnectWithoutBookInventoryInput } from './book-store-create-or-connect-without-book-inventory.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';

@InputType()
export class BookStoreCreateNestedOneWithoutBookInventoryInput {
  @Field(() => BookStoreCreateWithoutBookInventoryInput, { nullable: true })
  create?: BookStoreCreateWithoutBookInventoryInput;

  @Field(() => BookStoreCreateOrConnectWithoutBookInventoryInput, {
    nullable: true,
  })
  connectOrCreate?: BookStoreCreateOrConnectWithoutBookInventoryInput;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  connect?: BookStoreWhereUniqueInput;
}
