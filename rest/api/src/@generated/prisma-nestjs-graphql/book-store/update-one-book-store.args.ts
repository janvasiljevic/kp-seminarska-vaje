import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreUpdateInput } from './book-store-update.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';

@ArgsType()
export class UpdateOneBookStoreArgs {
  @Field(() => BookStoreUpdateInput, { nullable: false })
  data!: BookStoreUpdateInput;

  @Field(() => BookStoreWhereUniqueInput, { nullable: false })
  where!: BookStoreWhereUniqueInput;
}
