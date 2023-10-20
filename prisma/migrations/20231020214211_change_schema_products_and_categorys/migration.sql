/*
  Warnings:

  - You are about to drop the column `discontPercentage` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discontPercentage",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;
