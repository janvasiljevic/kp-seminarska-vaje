export interface IBook {
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
}

export interface IPagination<T> {
  count: number;
  items: T[];
}

export interface IBookStore {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  phoneNumber: string;
  url: string;
  totalProfit: number;
  bookInventory: IBookInventory[];
  booksSold: IBookSold[];
}

export interface IBookSold {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  profit: number;
  soldBy: string;
  bookId: string;
  bookStoreId: string;
  book: IBook;
}

export interface IBookInventory {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  count: number;
  price: number;
  bookId: string;
  book: IBook;
  bookStoreId: string;
}
export interface ISessionUser {
  firstname: string;
  lastname: string;
  mail: string;
  dn: string;
  role: Role;
}

export type Role = 'clerk' | 'seller' | 'admin';
