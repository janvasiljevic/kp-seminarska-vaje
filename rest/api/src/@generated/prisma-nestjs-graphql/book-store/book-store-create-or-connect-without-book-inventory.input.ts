import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { BookStoreCreateWithoutBookInventoryInput } from './book-store-create-without-book-inventory.input';

@InputType()
export class BookStoreCreateOrConnectWithoutBookInventoryInput {
  @Field(() => BookStoreWhereUniqueInput, { nullable: false })
  where!: BookStoreWhereUniqueInput;

  @Field(() => BookStoreCreateWithoutBookInventoryInput, { nullable: false })
  create!: BookStoreCreateWithoutBookInventoryInput;
}
