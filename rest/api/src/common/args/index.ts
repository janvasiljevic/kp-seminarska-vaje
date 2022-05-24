import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field((type) => Int)
  take: number = 10;

  @Field((type) => Int)
  skip: number = 0;
}
