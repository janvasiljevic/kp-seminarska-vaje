import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithoutBookStoreInput } from './book-inventory-update-without-book-store.input';

@InputType()
export class BookInventoryUpdateWithWhereUniqueWithoutBookStoreInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryUpdateWithoutBookStoreInput, { nullable: false })
  data!: BookInventoryUpdateWithoutBookStoreInput;
}
