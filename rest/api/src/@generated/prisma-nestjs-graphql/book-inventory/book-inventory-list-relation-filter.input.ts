import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryWhereInput } from './book-inventory-where.input';

@InputType()
export class BookInventoryListRelationFilter {
  @Field(() => BookInventoryWhereInput, { nullable: true })
  every?: BookInventoryWhereInput;

  @Field(() => BookInventoryWhereInput, { nullable: true })
  some?: BookInventoryWhereInput;

  @Field(() => BookInventoryWhereInput, { nullable: true })
  none?: BookInventoryWhereInput;
}
