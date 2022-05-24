import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateWithoutBookStoreInput } from './book-sold-create-without-book-store.input';
import { BookSoldCreateOrConnectWithoutBookStoreInput } from './book-sold-create-or-connect-without-book-store.input';
import { BookSoldUpsertWithWhereUniqueWithoutBookStoreInput } from './book-sold-upsert-with-where-unique-without-book-store.input';
import { BookSoldCreateManyBookStoreInputEnvelope } from './book-sold-create-many-book-store-input-envelope.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldUpdateWithWhereUniqueWithoutBookStoreInput } from './book-sold-update-with-where-unique-without-book-store.input';
import { BookSoldUpdateManyWithWhereWithoutBookStoreInput } from './book-sold-update-many-with-where-without-book-store.input';
import { BookSoldScalarWhereInput } from './book-sold-scalar-where.input';

@InputType()
export class BookSoldUpdateManyWithoutBookStoreInput {
  @Field(() => [BookSoldCreateWithoutBookStoreInput], { nullable: true })
  create?: Array<BookSoldCreateWithoutBookStoreInput>;

  @Field(() => [BookSoldCreateOrConnectWithoutBookStoreInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookSoldCreateOrConnectWithoutBookStoreInput>;

  @Field(() => [BookSoldUpsertWithWhereUniqueWithoutBookStoreInput], {
    nullable: true,
  })
  upsert?: Array<BookSoldUpsertWithWhereUniqueWithoutBookStoreInput>;

  @Field(() => BookSoldCreateManyBookStoreInputEnvelope, { nullable: true })
  createMany?: BookSoldCreateManyBookStoreInputEnvelope;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  set?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  delete?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  connect?: Array<BookSoldWhereUniqueInput>;

  @Field(() => [BookSoldUpdateWithWhereUniqueWithoutBookStoreInput], {
    nullable: true,
  })
  update?: Array<BookSoldUpdateWithWhereUniqueWithoutBookStoreInput>;

  @Field(() => [BookSoldUpdateManyWithWhereWithoutBookStoreInput], {
    nullable: true,
  })
  updateMany?: Array<BookSoldUpdateManyWithWhereWithoutBookStoreInput>;

  @Field(() => [BookSoldScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookSoldScalarWhereInput>;
}
