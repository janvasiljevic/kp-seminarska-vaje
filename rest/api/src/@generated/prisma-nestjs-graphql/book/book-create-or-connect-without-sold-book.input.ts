import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookCreateWithoutSoldBookInput } from './book-create-without-sold-book.input';

@InputType()
export class BookCreateOrConnectWithoutSoldBookInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @Field(() => BookCreateWithoutSoldBookInput, { nullable: false })
  create!: BookCreateWithoutSoldBookInput;
}
