import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';

@ArgsType()
export class DeleteOneBookStoreArgs {
  @Field(() => BookStoreWhereUniqueInput, { nullable: false })
  where!: BookStoreWhereUniqueInput;
}
