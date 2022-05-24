import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookInventoryCreateManyInput } from './book-inventory-create-many.input';

@ArgsType()
export class CreateManyBookInventoryArgs {
  @Field(() => [BookInventoryCreateManyInput], { nullable: false })
  data!: Array<BookInventoryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
