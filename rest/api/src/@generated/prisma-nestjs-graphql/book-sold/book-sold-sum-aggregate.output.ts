import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookSoldSumAggregate {
  @Field(() => Float, { nullable: true })
  profit?: number;
}
