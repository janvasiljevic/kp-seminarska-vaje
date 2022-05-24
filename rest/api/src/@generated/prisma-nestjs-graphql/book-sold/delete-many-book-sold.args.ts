import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereInput } from './book-sold-where.input';

@ArgsType()
export class DeleteManyBookSoldArgs {
  @Field(() => BookSoldWhereInput, { nullable: true })
  where?: BookSoldWhereInput;
}
