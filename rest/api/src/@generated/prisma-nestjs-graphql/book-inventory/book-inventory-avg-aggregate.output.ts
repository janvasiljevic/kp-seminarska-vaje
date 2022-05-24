import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookInventoryAvgAggregate {
  @Field(() => Float, { nullable: true })
  count?: number;

  @Field(() => Float, { nullable: true })
  price?: number;
}
