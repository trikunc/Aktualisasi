/*
  Warnings:

  - You are about to drop the column `kegiatan` on the `Ropk` table. All the data in the column will be lost.
  - The primary key for the `Subkegiatan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nominal` on the `Subkegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `rekening` on the `Subkegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `ropkId` on the `Subkegiatan` table. All the data in the column will be lost.
  - You are about to drop the column `subkegiatan` on the `Subkegiatan` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Subkegiatan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `name` to the `Subkegiatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ropk` DROP COLUMN `kegiatan`,
    ADD COLUMN `kegiatanId` INTEGER NULL,
    ADD COLUMN `nominal` INTEGER NULL,
    ADD COLUMN `rekening` VARCHAR(191) NULL,
    ADD COLUMN `subkegiatanId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Subkegiatan` DROP PRIMARY KEY,
    DROP COLUMN `nominal`,
    DROP COLUMN `rekening`,
    DROP COLUMN `ropkId`,
    DROP COLUMN `subkegiatan`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Kegiatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
