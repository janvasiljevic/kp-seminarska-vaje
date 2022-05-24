import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldCreateWithoutBookInput } from './book-sold-create-without-book.input';

@InputType()
export class BookSoldCreateOrConnectWithoutBookInput {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;

  @Field(() => BookSoldCreateWithoutBookInput, { nullable: false })
  create!: BookSoldCreateWithoutBookInput;
}
