import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryUpdateManyMutationInput } from './book-inventory-update-many-mutation.input';
import { BookInventoryWhereInput } from './book-inventory-where.input';

@ArgsType()
export class UpdateManyBookInventoryArgs {
  @Field(() => BookInventoryUpdateManyMutationInput, { nullable: false })
  data!: BookInventoryUpdateManyMutationInput;

  @Field(() => BookInventoryWhereInput, { nullable: true })
  where?: BookInventoryWhereInput;
}
