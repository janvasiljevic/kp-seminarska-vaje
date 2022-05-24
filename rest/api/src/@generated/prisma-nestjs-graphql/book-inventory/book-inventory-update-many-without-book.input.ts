import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateWithoutBookInput } from './book-inventory-create-without-book.input';
import { BookInventoryCreateOrConnectWithoutBookInput } from './book-inventory-create-or-connect-without-book.input';
import { BookInventoryUpsertWithWhereUniqueWithoutBookInput } from './book-inventory-upsert-with-where-unique-without-book.input';
import { BookInventoryCreateManyBookInputEnvelope } from './book-inventory-create-many-book-input-envelope.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithWhereUniqueWithoutBookInput } from './book-inventory-update-with-where-unique-without-book.input';
import { BookInventoryUpdateManyWithWhereWithoutBookInput } from './book-inventory-update-many-with-where-without-book.input';
import { BookInventoryScalarWhereInput } from './book-inventory-scalar-where.input';

@InputType()
export class BookInventoryUpdateManyWithoutBookInput {
  @Field(() => [BookInventoryCreateWithoutBookInput], { nullable: true })
  create?: Array<BookInventoryCreateWithoutBookInput>;

  @Field(() => [BookInventoryCreateOrConnectWithoutBookInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookInventoryCreateOrConnectWithoutBookInput>;

  @Field(() => [BookInventoryUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  upsert?: Array<BookInventoryUpsertWithWhereUniqueWithoutBookInput>;

  @Field(() => BookInventoryCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookInventoryCreateManyBookInputEnvelope;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  set?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  delete?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  connect?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true,
  })
  update?: Array<BookInventoryUpdateWithWhereUniqueWithoutBookInput>;

  @Field(() => [BookInventoryUpdateManyWithWhereWithoutBookInput], {
    nullable: true,
  })
  updateMany?: Array<BookInventoryUpdateManyWithWhereWithoutBookInput>;

  @Field(() => [BookInventoryScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookInventoryScalarWhereInput>;
}
