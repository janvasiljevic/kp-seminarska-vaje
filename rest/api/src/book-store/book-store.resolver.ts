import { Inject } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Field,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import { BookInventory } from 'src/@generated/prisma-nestjs-graphql/book-inventory/book-inventory.model';
import { BookStore } from 'src/@generated/prisma-nestjs-graphql/book-store/book-store.model';
import { Book } from 'src/@generated/prisma-nestjs-graphql/book/book.model';
import { PaginationArgs } from 'src/common/args';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Resolver((of) => BookStore)
export class BookStoreResolver {
  constructor(
    private prismaService: PrismaService,
    @Inject('PUB_SUB') private pubSub: PubSubEngine,
  ) {}

  @Query((returns) => BookStore, { name: 'bookstore' })
  async getInventory(@Args('id', { type: () => String }) id: string) {
    return this.prismaService.bookStore.findUnique({ where: { id } });
  }

  @Query((returns) => [BookStore], { name: 'bookstores' })
  async getInventories(@Args() { skip, take }: PaginationArgs) {
    return this.prismaService.bookStore.findMany({ skip, take });
  }

  @ResolveField('bookInventory', (returns) => [BookInventory])
  async getBookStore(@Parent() { id }: BookStore) {
    return await this.prismaService.bookInventory.findMany({
      where: { bookStoreId: id },
    });
  }

  @Subscription((returns) => BookInventory)
  bookSold() {
    return this.pubSub.asyncIterator('bookSold');
  }

  @ResolveField('_count', (returns) => Int)
  async getCount(@Parent() _: [BookStore]) {
    return await this.prismaService.bookInventory.count();
  }
}
