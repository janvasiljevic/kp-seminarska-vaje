import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookCreateInput } from './book-create.input';

@ArgsType()
export class CreateOneBookArgs {
  @Field(() => BookCreateInput, { nullable: false })
  data!: BookCreateInput;
}
