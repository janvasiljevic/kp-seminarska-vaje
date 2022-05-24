import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookUpdateInput } from './book-update.input';
import { BookWhereUniqueInput } from './book-where-unique.input';

@ArgsType()
export class UpdateOneBookArgs {
  @Field(() => BookUpdateInput, { nullable: false })
  data!: BookUpdateInput;

  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}
