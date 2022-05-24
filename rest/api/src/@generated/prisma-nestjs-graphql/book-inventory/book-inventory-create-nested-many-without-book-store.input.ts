import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateWithoutBookStoreInput } from './book-inventory-create-without-book-store.input';
import { BookInventoryCreateOrConnectWithoutBookStoreInput } from './book-inventory-create-or-connect-without-book-store.input';
import { BookInventoryCreateManyBookStoreInputEnvelope } from './book-inventory-create-many-book-store-input-envelope.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';

@InputType()
export class BookInventoryCreateNestedManyWithoutBookStoreInput {
  @Field(() => [BookInventoryCreateWithoutBookStoreInput], { nullable: true })
  create?: Array<BookInventoryCreateWithoutBookStoreInput>;

  @Field(() => [BookInventoryCreateOrConnectWithoutBookStoreInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookInventoryCreateOrConnectWithoutBookStoreInput>;

  @Field(() => BookInventoryCreateManyBookStoreInputEnvelope, {
    nullable: true,
  })
  createMany?: BookInventoryCreateManyBookStoreInputEnvelope;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  connect?: Array<BookInventoryWhereUniqueInput>;
}
