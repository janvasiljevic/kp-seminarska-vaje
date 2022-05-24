import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryCreateWithoutBookStoreInput } from './book-inventory-create-without-book-store.input';

@InputType()
export class BookInventoryCreateOrConnectWithoutBookStoreInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryCreateWithoutBookStoreInput, { nullable: false })
  create!: BookInventoryCreateWithoutBookStoreInput;
}
