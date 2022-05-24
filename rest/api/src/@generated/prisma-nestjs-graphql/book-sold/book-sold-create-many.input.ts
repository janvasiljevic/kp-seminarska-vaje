import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class BookSoldCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Float, { nullable: false })
  profit!: number;

  @Field(() => String, { nullable: false })
  soldBy!: string;

  @Field(() => String, { nullable: false })
  bookId!: string;

  @Field(() => String, { nullable: false })
  bookStoreId!: string;
}
