import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookStoreWhereInput } from './book-store-where.input';

@InputType()
export class BookStoreRelationFilter {
  @Field(() => BookStoreWhereInput, { nullable: true })
  is?: BookStoreWhereInput;

  @Field(() => BookStoreWhereInput, { nullable: true })
  isNot?: BookStoreWhereInput;
}
