import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryUncheckedCreateNestedManyWithoutBookStoreInput } from '../book-inventory/book-inventory-unchecked-create-nested-many-without-book-store.input';
import { BookSoldUncheckedCreateNestedManyWithoutBookStoreInput } from '../book-sold/book-sold-unchecked-create-nested-many-without-book-store.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookStoreUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => BookInventoryUncheckedCreateNestedManyWithoutBookStoreInput, {
    nullable: true,
  })
  bookInventory?: BookInventoryUncheckedCreateNestedManyWithoutBookStoreInput;

  @Field(() => BookSoldUncheckedCreateNestedManyWithoutBookStoreInput, {
    nullable: true,
  })
  booksSold?: BookSoldUncheckedCreateNestedManyWithoutBookStoreInput;

  @Field(() => Float, { nullable: true })
  totalProfit?: number;
}
