import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class BookInventoryScalarWhereInput {
  @Field(() => [BookInventoryScalarWhereInput], { nullable: true })
  AND?: Array<BookInventoryScalarWhereInput>;

  @Field(() => [BookInventoryScalarWhereInput], { nullable: true })
  OR?: Array<BookInventoryScalarWhereInput>;

  @Field(() => [BookInventoryScalarWhereInput], { nullable: true })
  NOT?: Array<BookInventoryScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  count?: IntFilter;

  @Field(() => FloatFilter, { nullable: true })
  price?: FloatFilter;

  @Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  bookStoreId?: StringFilter;
}
