import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class BookSoldScalarWhereInput {
  @Field(() => [BookSoldScalarWhereInput], { nullable: true })
  AND?: Array<BookSoldScalarWhereInput>;

  @Field(() => [BookSoldScalarWhereInput], { nullable: true })
  OR?: Array<BookSoldScalarWhereInput>;

  @Field(() => [BookSoldScalarWhereInput], { nullable: true })
  NOT?: Array<BookSoldScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => FloatFilter, { nullable: true })
  profit?: FloatFilter;

  @Field(() => StringFilter, { nullable: true })
  soldBy?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookStoreId?: StringFilter;
}
