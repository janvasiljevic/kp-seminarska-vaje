import { Book } from '../../book/entities/book.entity';
import { BookStore } from '../../book-store/entities/book-store.entity';

export class BookSold {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  book?: Book;
  bookStore?: BookStore;
  profit: number;
  soldBy: string;
  bookId: string;
  bookStoreId: string;
}
