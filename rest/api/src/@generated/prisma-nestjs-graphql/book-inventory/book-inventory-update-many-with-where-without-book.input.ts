import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryScalarWhereInput } from './book-inventory-scalar-where.input';
import { BookInventoryUpdateManyMutationInput } from './book-inventory-update-many-mutation.input';

@InputType()
export class BookInventoryUpdateManyWithWhereWithoutBookInput {
  @Field(() => BookInventoryScalarWhereInput, { nullable: false })
  where!: BookInventoryScalarWhereInput;

  @Field(() => BookInventoryUpdateManyMutationInput, { nullable: false })
  data!: BookInventoryUpdateManyMutationInput;
}
