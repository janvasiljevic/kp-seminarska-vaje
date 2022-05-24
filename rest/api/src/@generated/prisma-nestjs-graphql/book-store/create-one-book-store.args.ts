import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreCreateInput } from './book-store-create.input';

@ArgsType()
export class CreateOneBookStoreArgs {
  @Field(() => BookStoreCreateInput, { nullable: false })
  data!: BookStoreCreateInput;
}
