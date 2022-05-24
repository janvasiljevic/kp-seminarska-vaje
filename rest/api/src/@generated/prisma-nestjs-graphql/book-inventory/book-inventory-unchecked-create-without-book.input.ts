import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookInventoryUncheckedCreateWithoutBookInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: false })
  count!: number;

  @Field(() => Float, { nullable: false })
  price!: number;

  @Field(() => String, { nullable: false })
  bookStoreId!: string;
}
