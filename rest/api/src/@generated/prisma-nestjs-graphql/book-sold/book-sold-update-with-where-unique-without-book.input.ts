import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldUpdateWithoutBookInput } from './book-sold-update-without-book.input';

@InputType()
export class BookSoldUpdateWithWhereUniqueWithoutBookInput {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;

  @Field(() => BookSoldUpdateWithoutBookInput, { nullable: false })
  data!: BookSoldUpdateWithoutBookInput;
}
