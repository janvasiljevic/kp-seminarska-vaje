import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithoutBookInput } from './book-inventory-update-without-book.input';

@InputType()
export class BookInventoryUpdateWithWhereUniqueWithoutBookInput {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryUpdateWithoutBookInput, { nullable: false })
  data!: BookInventoryUpdateWithoutBookInput;
}
