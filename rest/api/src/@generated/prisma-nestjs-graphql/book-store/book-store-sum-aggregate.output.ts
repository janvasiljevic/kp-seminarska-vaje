import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookStoreSumAggregate {
  @Field(() => Float, { nullable: true })
  totalProfit?: number;
}
