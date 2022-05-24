import { BookInventory } from '../../book-inventory/entities/book-inventory.entity';
import { BookSold } from '../../book-sold/entities/book-sold.entity';

export class Book {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  authors: string;
  averageRating: number;
  isbn: string;
  isbn13: string;
  languageCode: string;
  numOfPages: number;
  ratingsCount: number;
  textReviews: number;
  BookDisplay?: BookInventory[];
  SoldBook?: BookSold[];
}
