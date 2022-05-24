import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutSoldBookInput } from './book-create-without-sold-book.input';
import { BookCreateOrConnectWithoutSoldBookInput } from './book-create-or-connect-without-sold-book.input';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedOneWithoutSoldBookInput {
  @Field(() => BookCreateWithoutSoldBookInput, { nullable: true })
  create?: BookCreateWithoutSoldBookInput;

  @Field(() => BookCreateOrConnectWithoutSoldBookInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutSoldBookInput;

  @Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput;
}
