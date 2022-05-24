import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookSoldAvgAggregate {
  @Field(() => Float, { nullable: true })
  profit?: number;
}
