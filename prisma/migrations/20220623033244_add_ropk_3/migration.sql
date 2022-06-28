/*
  Warnings:

  - You are about to drop the column `deadline` on the `Ropk` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Ropk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Ropk` DROP COLUMN `deadline`,
    DROP COLUMN `name`,
    ADD COLUMN `kegiatan` VARCHAR(191) NULL,
    ADD COLUMN `month` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `nominal` INTEGER NULL,
    ADD COLUMN `rekening` VARCHAR(191) NULL,
    ADD COLUMN `subkegiatan` VARCHAR(191) NULL;
