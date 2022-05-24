import { PrismaClient } from '@prisma/client';
import * as csv from 'fast-csv';
import * as fs from 'fs';
import * as path from 'path';
import { BookCreateInput } from 'src/@generated/prisma-nestjs-graphql/book/book-create.input';

import { faker } from '@faker-js/faker';

// ! TO RUN:
// $ yarn prisma db seed
export interface IBookCSVRow {
  bookID: string;
  title: string;
  authors: string;
  average_rating: string;
  isbn: string;
  isbn13: string;
  language_code: string;
  num_pages: string;
  ratings_count: string;
  text_reviews_count: string;
  publication_date: string;
  publisher: string;
}

const prisma = new PrismaClient();

const readCsv = (): Promise<BookCreateInput[]> => {
  return new Promise((resolve, reject) => {
    const booksData: BookCreateInput[] = [];

    fs.createReadStream(path.resolve(__dirname, '..', 'dataset', 'books.csv'))
      .pipe(csv.parse<IBookCSVRow, BookCreateInput>({ headers: true }))
      .transform(
        (row: IBookCSVRow): BookCreateInput => ({
          title: row.title,
          authors: row.authors,
          averageRating: parseFloat(row.average_rating),
          isbn: row.isbn,
          isbn13: row.isbn13,
          languageCode: row.language_code,
          numOfPages: parseInt(row.num_pages, 10),
          ratingsCount: parseInt(row.ratings_count, 10),
          textReviews: parseInt(row.text_reviews_count, 10),
        }),
      )
      .on('error', (error) => reject(error))
      .on('data', (row: BookCreateInput) => booksData.push(row))
      .on('end', () => resolve(booksData));
  });
};

async function main() {
  // Delete everything
  await prisma.bookInventory.deleteMany({});
  await prisma.bookSold.deleteMany({});
  await prisma.bookStore.deleteMany({});
  await prisma.book.deleteMany({});

  console.log('🌱 [1/5] Deleted everything');

  // Create books from a dataset
  await prisma.book.createMany({
    data: await readCsv(),
    skipDuplicates: true,
  });

  console.log('🌱 [2/5] Created books');

  // Create fake stores
  await prisma.bookStore.createMany({
    data: Array.from({ length: 20 }, () => ({
      name: faker.company.companyName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      url: faker.internet.url(),
    })),
  });

  console.log('🌱 [3/5] Created book stores');

  const books = await prisma.book.findMany({});
  const bookStores = await prisma.bookStore.findMany({});

  console.log('🌱 [4/5] Retrieved book stores and books');

  // Add inventory to book stores
  bookStores.forEach(async (bookStore) => {
    await prisma.bookInventory.createMany({
      data: Array.from(
        {
          length: Math.floor(Math.random() * 10) + 20,
        },
        () => {
          const book = books[Math.floor(Math.random() * books.length)];

          return {
            count: Math.floor(Math.random() * 10) + 3,
            price: Math.random() * 20 + 15,
            bookId: book.id,
            bookStoreId: bookStore.id,
          };
        },
      ),
    });
  });

  console.log('🌱 [5/5] Added inventory to book stores');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
