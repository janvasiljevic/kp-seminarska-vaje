import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereInput } from './book-sold-where.input';
import { BookSoldOrderByWithRelationInput } from './book-sold-order-by-with-relation.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookSoldScalarFieldEnum } from './book-sold-scalar-field.enum';

@ArgsType()
export class FindFirstBookSoldArgs {
  @Field(() => BookSoldWhereInput, { nullable: true })
  where?: BookSoldWhereInput;

  @Field(() => [BookSoldOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookSoldOrderByWithRelationInput>;

  @Field(() => BookSoldWhereUniqueInput, { nullable: true })
  cursor?: BookSoldWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [BookSoldScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookSoldScalarFieldEnum>;
}
