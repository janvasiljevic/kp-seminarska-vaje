import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateManyBookStoreInput } from './book-inventory-create-many-book-store.input';

@InputType()
export class BookInventoryCreateManyBookStoreInputEnvelope {
  @Field(() => [BookInventoryCreateManyBookStoreInput], { nullable: false })
  data!: Array<BookInventoryCreateManyBookStoreInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
