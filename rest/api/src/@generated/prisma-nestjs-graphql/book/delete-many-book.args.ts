import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';

@ArgsType()
export class DeleteManyBookArgs {
  @Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput;
}
