import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateWithoutBookStoreInput } from './book-sold-create-without-book-store.input';
import { BookSoldCreateOrConnectWithoutBookStoreInput } from './book-sold-create-or-connect-without-book-store.input';
import { BookSoldCreateManyBookStoreInputEnvelope } from './book-sold-create-many-book-store-input-envelope.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';

@InputType()
export class BookSoldCreateNestedManyWithoutBookStoreInput {
  @Field(() => [BookSoldCreateWithoutBookStoreInput], { nullable: true })
  create?: Array<BookSoldCreateWithoutBookStoreInput>;

  @Field(() => [BookSoldCreateOrConnectWithoutBookStoreInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookSoldCreateOrConnectWithoutBookStoreInput>;

  @Field(() => BookSoldCreateManyBookStoreInputEnvelope, { nullable: true })
  createMany?: BookSoldCreateManyBookStoreInputEnvelope;

  @Field(() => [BookSoldWhereUniqueInput], { nullable: true })
  connect?: Array<BookSoldWhereUniqueInput>;
}
