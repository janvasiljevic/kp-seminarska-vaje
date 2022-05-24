import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateWithoutBookInput } from './book-sold-create-without-book.input';
import { BookSoldCreateOrConnectWithoutBookInput } from './book-sold-create-or-connect-without-book.input';
import { BookSoldCreateManyBookInputEnvelope } from './book-sold-create-many-book-input-envelope.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';

@InputType()
export class BookSoldCreateNestedManyWithoutBookInput {
  @Field(() => [BookSoldCreateWithoutBookInput], { nullable: true })
  create?: Array<BookSoldCreateWithoutBookInput>;

  @Field(() => [BookSoldCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: Array<BookSoldCreateOrConnectWithoutBookInput>;

  @Field(() => BookSoldCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookSoldCreateManyBookInputEnvelope;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  connect?: Array<BookSoldWhereUniqueInput>;
}
