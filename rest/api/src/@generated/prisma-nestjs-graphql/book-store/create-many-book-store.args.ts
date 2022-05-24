import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreCreateManyInput } from './book-store-create-many.input';

@ArgsType()
export class CreateManyBookStoreArgs {
  @Field(() => [BookStoreCreateManyInput], { nullable: false })
  data!: Array<BookStoreCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
