import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookSoldMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Float, { nullable: true })
  profit?: number;

  @Field(() => String, { nullable: true })
  soldBy?: string;

  @Field(() => String, { nullable: true })
  bookId?: string;

  @Field(() => String, { nullable: true })
  bookStoreId?: string;
}
