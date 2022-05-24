import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldWhereInput } from './book-sold-where.input';

@InputType()
export class BookSoldListRelationFilter {
  @Field(() => BookSoldWhereInput, { nullable: true })
  every?: BookSoldWhereInput;

  @Field(() => BookSoldWhereInput, { nullable: true })
  some?: BookSoldWhereInput;

  @Field(() => BookSoldWhereInput, { nullable: true })
  none?: BookSoldWhereInput;
}
