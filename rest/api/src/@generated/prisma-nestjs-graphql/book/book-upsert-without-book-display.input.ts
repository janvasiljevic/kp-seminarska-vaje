import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutBookDisplayInput } from './book-update-without-book-display.input';
import { BookCreateWithoutBookDisplayInput } from './book-create-without-book-display.input';

@InputType()
export class BookUpsertWithoutBookDisplayInput {
  @Field(() => BookUpdateWithoutBookDisplayInput, { nullable: false })
  update!: BookUpdateWithoutBookDisplayInput;

  @Field(() => BookCreateWithoutBookDisplayInput, { nullable: false })
  create!: BookCreateWithoutBookDisplayInput;
}
