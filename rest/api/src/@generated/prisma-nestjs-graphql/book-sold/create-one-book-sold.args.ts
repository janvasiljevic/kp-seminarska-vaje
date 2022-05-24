import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldCreateInput } from './book-sold-create.input';

@ArgsType()
export class CreateOneBookSoldArgs {
  @Field(() => BookSoldCreateInput, { nullable: false })
  data!: BookSoldCreateInput;
}
