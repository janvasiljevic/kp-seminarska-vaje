import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateWithoutBookInput } from './book-sold-create-without-book.input';
import { BookSoldCreateOrConnectWithoutBookInput } from './book-sold-create-or-connect-without-book.input';
import { BookSoldUpsertWithWhereUniqueWithoutBookInput } from './book-sold-upsert-with-where-unique-without-book.input';
import { BookSoldCreateManyBookInputEnvelope } from './book-sold-create-many-book-input-envelope.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldUpdateWithWhereUniqueWithoutBookInput } from './book-sold-update-with-where-unique-without-book.input';
import { BookSoldUpdateManyWithWhereWithoutBookInput } from './book-sold-update-many-with-where-without-book.input';
import { BookSoldScalarWhereInput } from './book-sold-scalar-where.input';

@InputType()
export class BookSoldUpdateManyWithoutBookInput {
  @Field(() => [BookSoldCreateWithoutBookInput], { nullable: true })
  create?: Array<BookSoldCreateWithoutBookInput>;

  @Field(() => [BookSoldCreateOrConnectWithoutBookInput], { nullable: true })
  connectOrCreate?: Array<BookSoldCreateOrConnectWithoutBookInput>;

  @Field(() => [BookSoldUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: Array<BookSoldUpsertWithWhereUniqueWithoutBookInput>;

  @Field(() => BookSoldCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookSoldCreateManyBookInputEnvelope;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  set?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  delete?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  connect?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: Array<BookSoldUpdateWithWhereUniqueWithoutBookInput>;

  @Field(() => [BookSoldUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  updateMany?: Array<BookSoldUpdateManyWithWhereWithoutBookInput>;

  @Field(() => [BookSoldScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookSoldScalarWhereInput>;
}
