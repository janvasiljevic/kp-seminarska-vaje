import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookUpdateManyMutationInput } from './book-update-many-mutation.input';
import { BookWhereInput } from './book-where.input';

@ArgsType()
export class UpdateManyBookArgs {
  @Field(() => BookUpdateManyMutationInput, { nullable: false })
  data!: BookUpdateManyMutationInput;

  @Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput;
}
