-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "averageRating" DOUBLE PRECISION NOT NULL,
    "isbn" TEXT NOT NULL,
    "isbn13" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "numOfPages" INTEGER NOT NULL,
    "ratingsCount" INTEGER NOT NULL,
    "textReviews" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookInventory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookStoreId" TEXT NOT NULL,

    CONSTRAINT "BookInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookStore" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "totalProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "BookStore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookInventory" ADD CONSTRAINT "BookInventory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookInventory" ADD CONSTRAINT "BookInventory_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
