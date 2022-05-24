import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateWithoutBookStoreInput } from './book-inventory-create-without-book-store.input';
import { BookInventoryCreateOrConnectWithoutBookStoreInput } from './book-inventory-create-or-connect-without-book-store.input';
import { BookInventoryUpsertWithWhereUniqueWithoutBookStoreInput } from './book-inventory-upsert-with-where-unique-without-book-store.input';
import { BookInventoryCreateManyBookStoreInputEnvelope } from './book-inventory-create-many-book-store-input-envelope.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryUpdateWithWhereUniqueWithoutBookStoreInput } from './book-inventory-update-with-where-unique-without-book-store.input';
import { BookInventoryUpdateManyWithWhereWithoutBookStoreInput } from './book-inventory-update-many-with-where-without-book-store.input';
import { BookInventoryScalarWhereInput } from './book-inventory-scalar-where.input';

@InputType()
export class BookInventoryUpdateManyWithoutBookStoreInput {
  @Field(() => [BookInventoryCreateWithoutBookStoreInput], { nullable: true })
  create?: Array<BookInventoryCreateWithoutBookStoreInput>;

  @Field(() => [BookInventoryCreateOrConnectWithoutBookStoreInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookInventoryCreateOrConnectWithoutBookStoreInput>;

  @Field(() => [BookInventoryUpsertWithWhereUniqueWithoutBookStoreInput], {
    nullable: true,
  })
  upsert?: Array<BookInventoryUpsertWithWhereUniqueWithoutBookStoreInput>;

  @Field(() => BookInventoryCreateManyBookStoreInputEnvelope, {
    nullable: true,
  })
  createMany?: BookInventoryCreateManyBookStoreInputEnvelope;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  set?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  disconnect?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  delete?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  connect?: Array<BookInventoryWhereUniqueInput>;

  @Field(() => [BookInventoryUpdateWithWhereUniqueWithoutBookStoreInput], {
    nullable: true,
  })
  update?: Array<BookInventoryUpdateWithWhereUniqueWithoutBookStoreInput>;

  @Field(() => [BookInventoryUpdateManyWithWhereWithoutBookStoreInput], {
    nullable: true,
  })
  updateMany?: Array<BookInventoryUpdateManyWithWhereWithoutBookStoreInput>;

  @Field(() => [BookInventoryScalarWhereInput], { nullable: true })
  deleteMany?: Array<BookInventoryScalarWhereInput>;
}
