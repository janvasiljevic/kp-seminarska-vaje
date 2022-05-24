import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookSoldScalarWhereInput } from './book-sold-scalar-where.input';
import { BookSoldUpdateManyMutationInput } from './book-sold-update-many-mutation.input';

@InputType()
export class BookSoldUpdateManyWithWhereWithoutBookStoreInput {
  @Field(() => BookSoldScalarWhereInput, { nullable: false })
  where!: BookSoldScalarWhereInput;

  @Field(() => BookSoldUpdateManyMutationInput, { nullable: false })
  data!: BookSoldUpdateManyMutationInput;
}
