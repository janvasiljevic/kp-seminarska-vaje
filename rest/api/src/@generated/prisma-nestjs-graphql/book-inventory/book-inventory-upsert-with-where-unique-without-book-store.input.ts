import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithoutBookStoreInput } from './book-inventory-update-without-book-store.input';
import { BookInventoryCreateWithoutBookStoreInput } from './book-inventory-create-without-book-store.input';

@InputType()
export class BookInventoryUpsertWithWhereUniqueWithoutBookStoreInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryUpdateWithoutBookStoreInput, { nullable: false })
  update!: BookInventoryUpdateWithoutBookStoreInput;

  @Field(() => BookInventoryCreateWithoutBookStoreInput, { nullable: false })
  create!: BookInventoryCreateWithoutBookStoreInput;
}
