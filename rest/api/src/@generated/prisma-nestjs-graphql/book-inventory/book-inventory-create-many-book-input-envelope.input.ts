import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateManyBookInput } from './book-inventory-create-many-book.input';

@InputType()
export class BookInventoryCreateManyBookInputEnvelope {
  @Field(() => [BookInventoryCreateManyBookInput], { nullable: false })
  data!: Array<BookInventoryCreateManyBookInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
