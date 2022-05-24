import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookInventorySumAggregate {
  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Float, { nullable: true })
  price?: number;
}
