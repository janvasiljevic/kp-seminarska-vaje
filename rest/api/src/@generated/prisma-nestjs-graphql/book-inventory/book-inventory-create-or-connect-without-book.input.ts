import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryCreateWithoutBookInput } from './book-inventory-create-without-book.input';

@InputType()
export class BookInventoryCreateOrConnectWithoutBookInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryCreateWithoutBookInput, { nullable: false })
  create!: BookInventoryCreateWithoutBookInput;
}
