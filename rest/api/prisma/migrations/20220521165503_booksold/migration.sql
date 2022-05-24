/*
  Warnings:

  - You are about to drop the `SoldBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SoldBook" DROP CONSTRAINT "SoldBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "SoldBook" DROP CONSTRAINT "SoldBook_bookStoreId_fkey";

-- DropTable
DROP TABLE "SoldBook";

-- CreateTable
CREATE TABLE "BookSold" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "soldBy" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookStoreId" TEXT NOT NULL,

    CONSTRAINT "BookSold_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookSold" ADD CONSTRAINT "BookSold_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookSold" ADD CONSTRAINT "BookSold_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
