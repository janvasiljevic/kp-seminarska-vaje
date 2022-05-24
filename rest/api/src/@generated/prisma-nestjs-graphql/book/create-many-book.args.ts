import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookCreateManyInput } from './book-create-many.input';

@ArgsType()
export class CreateManyBookArgs {
  @Field(() => [BookCreateManyInput], { nullable: false })
  data!: Array<BookCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
