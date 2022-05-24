import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookStoreUpdateManyMutationInput } from './book-store-update-many-mutation.input';
import { BookStoreWhereInput } from './book-store-where.input';

@ArgsType()
export class UpdateManyBookStoreArgs {
  @Field(() => BookStoreUpdateManyMutationInput, { nullable: false })
  data!: BookStoreUpdateManyMutationInput;

  @Field(() => BookStoreWhereInput, { nullable: true })
  where?: BookStoreWhereInput;
}
