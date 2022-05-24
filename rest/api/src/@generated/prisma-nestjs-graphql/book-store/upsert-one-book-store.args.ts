import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { BookStoreCreateInput } from './book-store-create.input';
import { BookStoreUpdateInput } from './book-store-update.input';

@ArgsType()
export class UpsertOneBookStoreArgs {
  @Field(() => BookStoreWhereUniqueInput, { nullable: false })
  where!: BookStoreWhereUniqueInput;

  @Field(() => BookStoreCreateInput, { nullable: false })
  create!: BookStoreCreateInput;

  @Field(() => BookStoreUpdateInput, { nullable: false })
  update!: BookStoreUpdateInput;
}
