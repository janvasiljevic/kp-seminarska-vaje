import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateManyBookStoreInput } from './book-sold-create-many-book-store.input';

@InputType()
export class BookSoldCreateManyBookStoreInputEnvelope {
  @Field(() => [BookSoldCreateManyBookStoreInput], { nullable: false })
  data!: Array<BookSoldCreateManyBookStoreInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
