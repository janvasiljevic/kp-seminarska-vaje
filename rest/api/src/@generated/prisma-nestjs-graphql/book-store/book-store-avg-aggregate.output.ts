import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookStoreAvgAggregate {
  @Field(() => Float, { nullable: true })
  totalProfit?: number;
}
