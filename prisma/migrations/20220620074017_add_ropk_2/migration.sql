/*
  Warnings:

  - You are about to drop the `ROPK` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ROPK`;

-- CreateTable
CREATE TABLE `Ropk` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `deadline` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
