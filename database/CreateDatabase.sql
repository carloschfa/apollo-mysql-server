CREATE DATABASE messenger;
USE messenger;
CREATE TABLE `Blocked` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `blockerId` varchar(255) NOT NULL,
  `blockedId` varchar(255) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `chatId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `typing` tinyint(1) NOT NULL,
  `lastRead` bigint(20) NOT NULL,
  `mutedUntil` bigint(20) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `isArchived` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Friend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `friendId` varchar(255) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `chatId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ownerId` varchar(255) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `chatId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `chatId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `userFullname` varchar(255) NOT NULL,
  `userInitials` varchar(255) NOT NULL,
  `userPictureAt` bigint(20) NOT NULL,
  `type` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `photoWidth` int(11) NOT NULL,
  `photoHeight` int(11) NOT NULL,
  `videoDuration` int(11) NOT NULL,
  `audioDuration` double NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `isMediaQueued` tinyint(1) NOT NULL,
  `isMediaFailed` tinyint(1) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `pictureAt` bigint(20) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Available',
  `keepMedia` int(11) NOT NULL,
  `networkPhoto` int(11) NOT NULL,
  `networkVideo` int(11) NOT NULL,
  `networkAudio` int(11) NOT NULL,
  `wallpaper` varchar(255) NOT NULL,
  `loginMethod` varchar(255) NOT NULL,
  `oneSignalId` varchar(255) NOT NULL,
  `lastActive` bigint(20) NOT NULL,
  `lastTerminate` bigint(20) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `Single` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectId` varchar(255) NOT NULL,
  `chatId` varchar(255) NOT NULL,
  `userId1` varchar(255) NOT NULL,
  `fullname1` varchar(255) NOT NULL,
  `initials1` varchar(255) NOT NULL,
  `pictureAt1` bigint(20) NOT NULL,
  `userId2` varchar(255) NOT NULL,
  `fullname2` varchar(255) NOT NULL,
  `initials2` varchar(255) NOT NULL,
  `pictureAt2` bigint(20) NOT NULL,
  `createdAt` bigint(20) NOT NULL,
  `updatedAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
);
