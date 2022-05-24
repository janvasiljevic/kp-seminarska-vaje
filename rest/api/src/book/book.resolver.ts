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
import { Book } from 'src/@generated/prisma-nestjs-graphql/book/book.model';
import { PaginationArgs } from 'src/common/args';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { BookService } from './book.service';

@Resolver((of) => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private prismaService: PrismaService,
  ) {}

  @Query((returns) => [Book], { name: 'books' })
  async getBooks(@Args() { skip, take }: PaginationArgs) {
    return this.prismaService.book.findMany({ skip, take });
  }

  @Query((returns) => Book, { name: 'book' })
  async getBook(@Args('id', { type: () => String }) id: string) {
    return this.bookService.findOne(id);
  }

  @ResolveField('BookDisplay', (returns) => [BookInventory])
  async getBookDisplay(@Parent() book: Book) {
    const { id } = book;

    return this.prismaService.bookInventory.findMany({
      where: { book: { id } },
    });
  }

  @ResolveField('SoldBook', (returns) => [BookSold])
  async getSoldBook(@Parent() book: Book) {
    const { id } = book;

    return this.prismaService.bookSold.findMany({
      where: { book: { id } },
    });
  }

  @ResolveField('_count', (returns) => Int)
  async getCount(@Parent() _: [Book]) {
    return await this.prismaService.book.count();
  }
}
