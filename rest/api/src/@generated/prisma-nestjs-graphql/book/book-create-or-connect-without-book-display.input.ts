import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookCreateWithoutBookDisplayInput } from './book-create-without-book-display.input';

@InputType()
export class BookCreateOrConnectWithoutBookDisplayInput {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @Field(() => BookCreateWithoutBookDisplayInput, { nullable: false })
  create!: BookCreateWithoutBookDisplayInput;
}
