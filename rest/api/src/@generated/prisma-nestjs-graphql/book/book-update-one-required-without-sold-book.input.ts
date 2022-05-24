import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutSoldBookInput } from './book-create-without-sold-book.input';
import { BookCreateOrConnectWithoutSoldBookInput } from './book-create-or-connect-without-sold-book.input';
import { BookUpsertWithoutSoldBookInput } from './book-upsert-without-sold-book.input';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithoutSoldBookInput } from './book-update-without-sold-book.input';

@InputType()
export class BookUpdateOneRequiredWithoutSoldBookInput {
  @Field(() => BookCreateWithoutSoldBookInput, { nullable: true })
  create?: BookCreateWithoutSoldBookInput;

  @Field(() => BookCreateOrConnectWithoutSoldBookInput, { nullable: true })
  connectOrCreate?: BookCreateOrConnectWithoutSoldBookInput;

  @Field(() => BookUpsertWithoutSoldBookInput, { nullable: true })
  upsert?: BookUpsertWithoutSoldBookInput;

  @Field(() => BookWhereUniqueInput, { nullable: true })
  connect?: BookWhereUniqueInput;

  @Field(() => BookUpdateWithoutSoldBookInput, { nullable: true })
  update?: BookUpdateWithoutSoldBookInput;
}
