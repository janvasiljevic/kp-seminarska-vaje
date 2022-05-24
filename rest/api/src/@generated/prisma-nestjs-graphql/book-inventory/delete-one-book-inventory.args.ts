import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryWhereUniqueInput } from './book-inventory-where-unique.input';

@ArgsType()
export class DeleteOneBookInventoryArgs {
  @Field(() => BookInventoryWhereUniqueInput, { nullable: false })
  where!: BookInventoryWhereUniqueInput;
}
