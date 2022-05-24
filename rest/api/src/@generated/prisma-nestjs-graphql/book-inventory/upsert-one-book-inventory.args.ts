import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';
import { BookInventoryCreateInput } from './book-inventory-create.input';
import { BookInventoryUpdateInput } from './book-inventory-update.input';

@ArgsType()
export class UpsertOneBookInventoryArgs {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;

  @Field(() => BookInventoryCreateInput, { nullable: false })
  create!: BookInventoryCreateInput;

  @Field(() => BookInventoryUpdateInput, { nullable: false })
  update!: BookInventoryUpdateInput;
}
