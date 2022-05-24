import { Book } from '../../book/entities/book.entity';
import { BookStore } from '../../book-store/entities/book-store.entity';

export class BookInventory {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  book?: Book;
  count: number;
  bookStore?: BookStore;
  price: number;
  bookId: string;
  bookStoreId: string;
}
