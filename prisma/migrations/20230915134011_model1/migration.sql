-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `picture_name` VARCHAR(191) NOT NULL,
    `is_active` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_instansi` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_sk` VARCHAR(191) NOT NULL,
    `userPassword` VARCHAR(191) NOT NULL,
    `imageProfile` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `setuju` VARCHAR(191) NOT NULL,
    `is_verifikasi` INTEGER NOT NULL,
    `is_role` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_userPassword_key`(`userPassword`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TglReg` DATETIME(3) NOT NULL,
    `TglNaskah` DATETIME(3) NOT NULL,
    `Hal` VARCHAR(191) NOT NULL,
    `id_user` INTEGER NOT NULL,
    `nama_instansi` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `FileDir` VARCHAR(191) NOT NULL,
    `file_surat_name` VARCHAR(191) NOT NULL,
    `tgl_verifikasi` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `master_role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rule` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `histori_login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nama_instansi` VARCHAR(191) NOT NULL,
    `tgl_login` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `histori_login` ADD CONSTRAINT `histori_login_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
