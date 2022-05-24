import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookInventoryCreateNestedManyWithoutBookStoreInput } from '../book-inventory/book-inventory-create-nested-many-without-book-store.input';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookStoreCreateWithoutBooksSoldInput {
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

  @Field(() => BookInventoryCreateNestedManyWithoutBookStoreInput, {
    nullable: true,
  })
  bookInventory?: BookInventoryCreateNestedManyWithoutBookStoreInput;

  @Field(() => Float, { nullable: true })
  totalProfit?: number;
}
