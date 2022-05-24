import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutSoldBookInput } from './book-update-without-sold-book.input';
import { BookCreateWithoutSoldBookInput } from './book-create-without-sold-book.input';

@InputType()
export class BookUpsertWithoutSoldBookInput {
  @Field(() => BookUpdateWithoutSoldBookInput, { nullable: false })
  update!: BookUpdateWithoutSoldBookInput;

  @Field(() => BookCreateWithoutSoldBookInput, { nullable: false })
  create!: BookCreateWithoutSoldBookInput;
}
