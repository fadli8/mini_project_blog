-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(128) NOT NULL,
    `username` VARCHAR(128) NOT NULL,
    `email` VARCHAR(128) NOT NULL,
    `password` VARCHAR(128) NOT NULL,
    `role` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NULL,
    `published` BOOLEAN NULL DEFAULT false,
    `created_at` VARCHAR(191) NOT NULL,
    `updated_at` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(128) NOT NULL,
    `body` VARCHAR(128) NOT NULL,
    `articleId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
