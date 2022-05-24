import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookCreateInput } from './book-create.input';
import { BookUpdateInput } from './book-update.input';

@ArgsType()
export class UpsertOneBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;

  @Field(() => BookCreateInput, { nullable: false })
  create!: BookCreateInput;

  @Field(() => BookUpdateInput, { nullable: false })
  update!: BookUpdateInput;
}
