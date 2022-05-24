import {
  Args,
  ArgsType,
  Field,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BookInventory } from 'src/@generated/prisma-nestjs-graphql/book-inventory/book-inventory.model';
import { BookStore } from 'src/@generated/prisma-nestjs-graphql/book-store/book-store.model';
import { Book } from 'src/@generated/prisma-nestjs-graphql/book/book.model';
import { PaginationArgs } from 'src/common/args';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Resolver((of) => BookInventory)
export class BookInventoryResolver {
  constructor(private prismaService: PrismaService) {}

  @Query((returns) => BookInventory, { name: 'inventory' })
  async getInventory(@Args('id', { type: () => String }) id: string) {
    return this.prismaService.bookInventory.findUnique({ where: { id } });
  }

  @Query((returns) => [BookInventory], { name: 'inventories' })
  async getInventories(@Args() { skip, take }: PaginationArgs) {
    return this.prismaService.bookInventory.findMany({ skip, take });
  }

  @ResolveField('bookStore', (returns) => BookStore)
  async getBookStore(@Parent() { id }: BookInventory) {
    return await this.prismaService.bookStore.findFirst({
      where: { bookInventory: { some: { id } } },
    });
  }

  @ResolveField('book', (returns) => Book)
  async getBook(@Parent() { id }: BookInventory) {
    return await this.prismaService.book.findFirst({
      where: { BookDisplay: { some: { id } } },
    });
  }
}
