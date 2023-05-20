-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2023 at 04:45 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kopi_apps`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_kopi`
--

CREATE TABLE `data_kopi` (
  `id` int(11) NOT NULL,
  `nama_kopi` varchar(100) NOT NULL,
  `id_jenis_kopi` int(11) NOT NULL,
  `harga_kopi` decimal(10,0) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_kopi`
--

INSERT INTO `data_kopi` (`id`, `nama_kopi`, `id_jenis_kopi`, `harga_kopi`, `deskripsi`, `gambar`) VALUES
(4, 'Kopi Panas', 5, '100000', '-', 'blah.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `jenis_kopi`
--

CREATE TABLE `jenis_kopi` (
  `id` int(11) NOT NULL,
  `jenis_kopi` varchar(50) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jenis_kopi`
--

INSERT INTO `jenis_kopi` (`id`, `jenis_kopi`, `keterangan`) VALUES
(5, 'Gula Aren', 'Kopi Gula aren enak loh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_kopi`
--
ALTER TABLE `data_kopi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jenis_kopi` (`id_jenis_kopi`);

--
-- Indexes for table `jenis_kopi`
--
ALTER TABLE `jenis_kopi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_kopi`
--
ALTER TABLE `data_kopi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jenis_kopi`
--
ALTER TABLE `jenis_kopi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_kopi`
--
ALTER TABLE `data_kopi`
  ADD CONSTRAINT `data_kopi_ibfk_1` FOREIGN KEY (`id_jenis_kopi`) REFERENCES `jenis_kopi` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
