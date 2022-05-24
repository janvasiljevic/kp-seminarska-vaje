import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldCreateManyInput } from './book-sold-create-many.input';

@ArgsType()
export class CreateManyBookSoldArgs {
  @Field(() => [BookSoldCreateManyInput], { nullable: false })
  data!: Array<BookSoldCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
