import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldUpdateManyMutationInput } from './book-sold-update-many-mutation.input';
import { BookSoldWhereInput } from './book-sold-where.input';

@ArgsType()
export class UpdateManyBookSoldArgs {
  @Field(() => BookSoldUpdateManyMutationInput, { nullable: false })
  data!: BookSoldUpdateManyMutationInput;

  @Field(() => BookSoldWhereInput, { nullable: true })
  where?: BookSoldWhereInput;
}
