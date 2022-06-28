/*
  Warnings:

  - You are about to drop the column `month` on the `Ropk` table. All the data in the column will be lost.
  - You are about to drop the column `nominal` on the `Ropk` table. All the data in the column will be lost.
  - You are about to drop the column `rekening` on the `Ropk` table. All the data in the column will be lost.
  - You are about to drop the column `subkegiatan` on the `Ropk` table. All the data in the column will be lost.
  - Added the required column `monthId` to the `Ropk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ropk` DROP COLUMN `month`,
    DROP COLUMN `nominal`,
    DROP COLUMN `rekening`,
    DROP COLUMN `subkegiatan`,
    ADD COLUMN `monthId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Subkegiatan` (
    `id` VARCHAR(191) NOT NULL,
    `ropkId` VARCHAR(191) NOT NULL,
    `subkegiatan` VARCHAR(191) NULL,
    `rekening` VARCHAR(191) NULL,
    `nominal` INTEGER NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Month` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
