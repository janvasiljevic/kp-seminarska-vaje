import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutBookDisplayInput } from './book-create-without-book-display.input';
import { BookCreateOrConnectWithoutBookDisplayInput } from './book-create-or-connect-without-book-display.input';
import { BookUpsertWithoutBookDisplayInput } from './book-upsert-without-book-display.input';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithoutBookDisplayInput } from './book-update-without-book-display.input';

@InputType()
export class BookUpdateOneRequiredWithoutBookDisplayInput {
  @Field(() => BookCreateWithoutBookDisplayInput, { nullable: true })
  create?: BookCreateWithoutBookDisplayInput;

  @Field(() => BookCreateOrConnectWithoutBookDisplayInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutBookDisplayInput;

  @Field(() => BookUpsertWithoutBookDisplayInput, { nullable: true })
  upsert?: BookUpsertWithoutBookDisplayInput;

  @Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput;

  @Field(() => BookUpdateWithoutBookDisplayInput, { nullable: true })
  update?: BookUpdateWithoutBookDisplayInput;
}
