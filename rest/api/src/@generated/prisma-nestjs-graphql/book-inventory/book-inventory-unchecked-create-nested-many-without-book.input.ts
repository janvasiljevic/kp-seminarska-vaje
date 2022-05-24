import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateWithoutBookInput } from './book-inventory-create-without-book.input';
import { BookInventoryCreateOrConnectWithoutBookInput } from './book-inventory-create-or-connect-without-book.input';
import { BookInventoryCreateManyBookInputEnvelope } from './book-inventory-create-many-book-input-envelope.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';

@InputType()
export class BookInventoryUncheckedCreateNestedManyWithoutBookInput {
  @Field(() => [BookInventoryCreateWithoutBookInput], { nullable: true })
  create?: Array<BookInventoryCreateWithoutBookInput>;

  @Field(() => [BookInventoryCreateOrConnectWithoutBookInput], {
    nullable: true,
  })
  connectOrCreate?: Array<BookInventoryCreateOrConnectWithoutBookInput>;

  @Field(() => BookInventoryCreateManyBookInputEnvelope, { nullable: true })
  createMany?: BookInventoryCreateManyBookInputEnvelope;

  @Field(() => [BookInventoryWhereUniqueInput], { nullable: true })
  connect?: Array<BookInventoryWhereUniqueInput>;
}
