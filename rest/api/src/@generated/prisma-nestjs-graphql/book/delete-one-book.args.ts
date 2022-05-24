import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';

@ArgsType()
export class DeleteOneBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  where!: BookWhereUniqueInput;
}
