import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryUpdateInput } from './book-inventory-update.input';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';

@ArgsType()
export class UpdateOneBookInventoryArgs {
  @Field(() => BookInventoryUpdateInput, { nullable: false })
  data!: BookInventoryUpdateInput;

  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;
}
