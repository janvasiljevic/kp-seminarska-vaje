import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryCreateInput } from './book-inventory-create.input';

@ArgsType()
export class CreateOneBookInventoryArgs {
  @Field(() => BookInventoryCreateInput, { nullable: false })
  data!: BookInventoryCreateInput;
}
