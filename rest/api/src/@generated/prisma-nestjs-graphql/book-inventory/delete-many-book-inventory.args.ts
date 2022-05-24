import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereInput } from './book-inventory-where.input';

@ArgsType()
export class DeleteManyBookInventoryArgs {
  @Field(() => BookInventoryWhereInput, { nullable: true })
  where?: BookInventoryWhereInput;
}
