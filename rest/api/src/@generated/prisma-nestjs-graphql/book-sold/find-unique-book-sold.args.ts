import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';

@ArgsType()
export class FindUniqueBookSoldArgs {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;
}
