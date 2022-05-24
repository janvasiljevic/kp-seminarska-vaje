import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreCreateWithoutBookInventoryInput } from './book-store-create-without-book-inventory.input';
import { BookStoreCreateOrConnectWithoutBookInventoryInput } from './book-store-create-or-connect-without-book-inventory.input';
import { BookStoreUpsertWithoutBookInventoryInput } from './book-store-upsert-without-book-inventory.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { BookStoreUpdateWithoutBookInventoryInput } from './book-store-update-without-book-inventory.input';

@InputType()
export class BookStoreUpdateOneRequiredWithoutBookInventoryInput {
  @Field(() => BookStoreCreateWithoutBookInventoryInput, { nullable: true })
  create?: BookStoreCreateWithoutBookInventoryInput;

  @Field(() => BookStoreCreateOrConnectWithoutBookInventoryInput, {
    nullable: true,
  })
  connectOrCreate?: BookStoreCreateOrConnectWithoutBookInventoryInput;

  @Field(() => BookStoreUpsertWithoutBookInventoryInput, { nullable: true })
  upsert?: BookStoreUpsertWithoutBookInventoryInput;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  connect?: BookStoreWhereUniqueInput;

  @Field(() => BookStoreUpdateWithoutBookInventoryInput, { nullable: true })
  update?: BookStoreUpdateWithoutBookInventoryInput;
}
