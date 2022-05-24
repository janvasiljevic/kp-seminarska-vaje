import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldUpdateInput } from './book-sold-update.input';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';

@ArgsType()
export class UpdateOneBookSoldArgs {
  @Field(() => BookSoldUpdateInput, { nullable: false })
  data!: BookSoldUpdateInput;

  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;
}
