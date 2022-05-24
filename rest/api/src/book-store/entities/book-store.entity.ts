import { BookInventory } from '../../book-inventory/entities/book-inventory.entity';
import { BookSold } from '../../book-sold/entities/book-sold.entity';

export class BookStore {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  phoneNumber: string;
  url: string;
  bookInventory?: BookInventory[];
  booksSold?: BookSold[];
  totalProfit: number;
}
