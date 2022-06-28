/*
  Warnings:

  - You are about to drop the column `kegiatanId` on the `Ropk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Ropk` DROP COLUMN `kegiatanId`;

-- AlterTable
ALTER TABLE `Subkegiatan` ADD COLUMN `kegiatanId` INTEGER NULL;
