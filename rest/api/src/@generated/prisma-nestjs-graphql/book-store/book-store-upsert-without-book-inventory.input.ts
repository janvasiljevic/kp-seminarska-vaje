import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreUpdateWithoutBookInventoryInput } from './book-store-update-without-book-inventory.input';
import { BookStoreCreateWithoutBookInventoryInput } from './book-store-create-without-book-inventory.input';

@InputType()
export class BookStoreUpsertWithoutBookInventoryInput {
  @Field(() => BookStoreUpdateWithoutBookInventoryInput, { nullable: false })
  update!: BookStoreUpdateWithoutBookInventoryInput;

  @Field(() => BookStoreCreateWithoutBookInventoryInput, { nullable: false })
  create!: BookStoreCreateWithoutBookInventoryInput;
}
