/*
  Warnings:

  - The primary key for the `Kejuruan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Month` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Subkegiatan` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Asset` MODIFY `kejuruanId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Kejuruan` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Month` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Ropk` MODIFY `monthId` VARCHAR(191) NOT NULL,
    MODIFY `subkegiatanId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Subkegiatan` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
