import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereInput } from './book-inventory-where.input';
import { BookInventoryOrderByWithRelationInput } from './book-inventory-order-by-with-relation.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookInventoryScalarFieldEnum } from './book-inventory-scalar-field.enum';

@ArgsType()
export class FindManyBookInventoryArgs {
  @Field(() => BookInventoryWhereInput, { nullable: true })
  where?: BookInventoryWhereInput;

  @Field(() => [BookInventoryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BookInventoryOrderByWithRelationInput>;

  @Field(() => BookInventoryWhereUniqueInput, { nullable: true })
  cursor?: BookInventoryWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [BookInventoryScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BookInventoryScalarFieldEnum>;
}
