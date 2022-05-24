import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreWhereInput } from './book-store-where.input';
import { BookStoreOrderByWithRelationInput } from './book-store-order-by-with-relation.input';
import { BookStoreWhereUniqueInput } from './book-store-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookStoreScalarFieldEnum } from './book-store-scalar-field.enum';

@ArgsType()
export class FindFirstBookStoreArgs {
  @Field(() => BookStoreWhereInput, { nullable: true })
  where?: BookStoreWhereInput;

  @Field(() => [BookStoreOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookStoreOrderByWithRelationInput>;

  @Field(() => BookStoreWhereUniqueInput, { nullable: true })
  cursor?: BookStoreWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [BookStoreScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookStoreScalarFieldEnum>;
}
