import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldUpdateWithoutBookStoreInput } from './book-sold-update-without-book-store.input';

@InputType()
export class BookSoldUpdateWithWhereUniqueWithoutBookStoreInput {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;

  @Field(() => BookSoldUpdateWithoutBookStoreInput, { nullable: false })
  data!: BookSoldUpdateWithoutBookStoreInput;
}
