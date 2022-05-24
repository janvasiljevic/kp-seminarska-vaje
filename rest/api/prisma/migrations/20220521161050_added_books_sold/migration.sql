-- CreateTable
CREATE TABLE "SoldBook" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "soldBy" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "bookStoreId" TEXT,

    CONSTRAINT "SoldBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SoldBook" ADD CONSTRAINT "SoldBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldBook" ADD CONSTRAINT "SoldBook_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE SET NULL ON UPDATE CASCADE;
