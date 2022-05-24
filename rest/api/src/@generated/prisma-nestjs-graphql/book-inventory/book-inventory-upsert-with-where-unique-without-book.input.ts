import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithoutBookInput } from './book-inventory-update-without-book.input';
import { BookInventoryCreateWithoutBookInput } from './book-inventory-create-without-book.input';

@InputType()
export class BookInventoryUpsertWithWhereUniqueWithoutBookInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryUpdateWithoutBookInput, { nullable: false })
  update!: BookInventoryUpdateWithoutBookInput;

  @Field(() => BookInventoryCreateWithoutBookInput, { nullable: false })
  create!: BookInventoryCreateWithoutBookInput;
}
