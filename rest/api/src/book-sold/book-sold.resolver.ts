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
import { BookSold } from 'src/@generated/prisma-nestjs-graphql/book-sold/book-sold.model';
import { BookStore } from 'src/@generated/prisma-nestjs-graphql/book-store/book-store.model';
import { Book } from 'src/@generated/prisma-nestjs-graphql/book/book.model';
import { PaginationArgs } from 'src/common/args';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Resolver((of) => BookSold)
export class BookSoldResolver {
  constructor(private prismaService: PrismaService) {}

  @Query((returns) => [BookSold], { name: 'soldbooks' })
  async getBooksSold(@Args() { skip, take }: PaginationArgs) {
    return this.prismaService.bookSold.findMany({ skip, take });
  }

  @Query((returns) => BookSold, { name: 'soldbook' })
  async getBookSold(@Args('id', { type: () => String }) id: string) {
    return this.prismaService.bookSold.findUnique({ where: { id } });
  }

  @ResolveField('book', (returns) => Book)
  async getBook(@Parent() { bookId }: BookSold) {
    return this.prismaService.book.findFirst({
      where: { id: bookId },
    });
  }

  @ResolveField('bookStore', (returns) => BookStore)
  async getBookStore(@Parent() { bookStoreId }: BookSold) {
    return this.prismaService.bookStore.findFirst({
      where: { id: bookStoreId },
    });
  }
}
