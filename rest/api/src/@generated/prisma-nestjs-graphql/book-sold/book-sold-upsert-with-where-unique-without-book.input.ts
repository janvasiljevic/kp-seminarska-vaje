import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldUpdateWithoutBookInput } from './book-sold-update-without-book.input';
import { BookSoldCreateWithoutBookInput } from './book-sold-create-without-book.input';

@InputType()
export class BookSoldUpsertWithWhereUniqueWithoutBookInput {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;

  @Field(() => BookSoldUpdateWithoutBookInput, { nullable: false })
  update!: BookSoldUpdateWithoutBookInput;

  @Field(() => BookSoldCreateWithoutBookInput, { nullable: false })
  create!: BookSoldCreateWithoutBookInput;
}
