-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 14, 2020 at 10:08 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_101`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_user`
--

DROP TABLE IF EXISTS `business_user`;
CREATE TABLE IF NOT EXISTS `business_user` (
  `b_id` int(10) NOT NULL AUTO_INCREMENT,
  `b_name` varchar(250) NOT NULL,
  `b_user_name` varchar(250) NOT NULL,
  `b_email` varchar(250) NOT NULL,
  `b_password` varchar(250) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

DROP TABLE IF EXISTS `uploads`;
CREATE TABLE IF NOT EXISTS `uploads` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `house_img` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `house_title` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `house_disc` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `house_category` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
