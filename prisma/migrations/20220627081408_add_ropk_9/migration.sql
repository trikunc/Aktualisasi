/*
  Warnings:

  - The primary key for the `Kegiatan` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Kegiatan` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Subkegiatan` MODIFY `kegiatanId` VARCHAR(191) NULL;
