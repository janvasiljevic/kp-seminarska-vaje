import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldCreateManyBookInput } from './book-sold-create-many-book.input';

@InputType()
export class BookSoldCreateManyBookInputEnvelope {
  @Field(() => [BookSoldCreateManyBookInput], { nullable: false })
  data!: Array<BookSoldCreateManyBookInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
