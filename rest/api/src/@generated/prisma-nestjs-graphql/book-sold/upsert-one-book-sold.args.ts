import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookSoldWhereUniqueInput } from './book-sold-where-unique.input';
import { BookSoldCreateInput } from './book-sold-create.input';
import { BookSoldUpdateInput } from './book-sold-update.input';

@ArgsType()
export class UpsertOneBookSoldArgs {
  @Field(() => BookSoldWhereUniqueInput, { nullable: false })
  where!: BookSoldWhereUniqueInput;

  @Field(() => BookSoldCreateInput, { nullable: false })
  create!: BookSoldCreateInput;

  @Field(() => BookSoldUpdateInput, { nullable: false })
  update!: BookSoldUpdateInput;
}
