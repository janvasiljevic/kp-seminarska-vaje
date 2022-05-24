import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutBookDisplayInput } from './book-create-without-book-display.input';
import { BookCreateOrConnectWithoutBookDisplayInput } from './book-create-or-connect-without-book-display.input';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedOneWithoutBookDisplayInput {
  @Field(() => BookCreateWithoutBookDisplayInput, { nullable: true })
  create?: BookCreateWithoutBookDisplayInput;

  @Field(() => BookCreateOrConnectWithoutBookDisplayInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutBookDisplayInput;

  @Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput;
}
