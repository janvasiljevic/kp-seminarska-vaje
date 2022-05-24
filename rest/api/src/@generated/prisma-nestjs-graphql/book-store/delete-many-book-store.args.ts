import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereInput } from './book-store-where.input';

@ArgsType()
export class DeleteManyBookStoreArgs {
  @Field(() => BookStoreWhereInput, { nullable: true })
  where?: BookStoreWhereInput;
}
