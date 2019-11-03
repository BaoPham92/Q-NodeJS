CREATE DATABASE  IF NOT EXISTS `info` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `info`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: info
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(64) DEFAULT NULL,
  `email` char(255) DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Richard','lacus.Ut@ProinmiAliquam.net','DFU75FAE3HG'),(2,'Francesca','orci.Ut@bibendumullamcorper.com','UQZ45DZR7WJ'),(3,'Giacomo','non.quam@Suspendisse.org','ZHZ76ZJL7IU'),(4,'Mari','at.velit.Cras@magnisdis.co.uk','QGY80DYK5BX'),(5,'Shelley','euismod.enim@cubiliaCurae.com','HUG10YIY8YK'),(6,'Leroy','luctus@consequatenimdiam.net','FHG22UML8ML'),(7,'Gretchen','id@Nunclectuspede.net','KNG55XXW0VU'),(8,'Patrick','Nulla@egetmetus.com','RLC92HMN4DW'),(9,'Nichole','suscipit@urna.edu','DYU06UPV6SJ'),(10,'Savannah','mauris.Integer.sem@nisidictum.ca','CLI76RXJ7FE'),(11,'September','dapibus.ligula.Aliquam@Phasellus.com','QHO20HIU0KF'),(12,'Minerva','elementum.lorem@fermentumrisus.org','MFZ50PCW1KA'),(13,'Brennan','orci@asollicitudinorci.com','YAI45RDK5ZS'),(14,'Jeremy','felis.orci@massalobortis.ca','VAR84UDP8TM'),(15,'Astra','elit.pharetra@sollicitudincommodoipsum.com','UEX07BHL0QE'),(16,'Hamilton','dui@blandit.org','SFY76RBC7IB'),(17,'Harriet','euismod.urna@cursus.org','JRB22LUO8PI'),(18,'Yuli','ac@nonleo.net','OLY70GJD3BH'),(19,'Cheryl','sem@aliquetmolestietellus.co.uk','GPI46WFQ1PS'),(20,'Philip','sit@sapienimperdietornare.edu','FAZ65LQK6SM'),(21,'Aimee','orci.Ut.semper@ipsum.net','KTZ29IHZ7ZP'),(22,'Tyler','at.risus@odiosempercursus.net','WQI88DVF6CD'),(23,'Griffin','massa.non@at.net','IYD46FNK3XB'),(24,'Kevin','magna.sed.dui@eu.co.uk','WGN44MAE9QV'),(25,'Martha','ullamcorper.Duis.cursus@tellusnon.com','LQZ11WLZ6KA'),(26,'Sydnee','ornare@Integer.ca','KEE29QTZ6CW'),(27,'Nehru','commodo.at.libero@etnuncQuisque.ca','XVP10QVF0YH'),(28,'Nathaniel','eu@lacusAliquamrutrum.org','TLK22FJU7UI'),(29,'Elliott','ac.mi.eleifend@metus.net','UYX48BAL8WA'),(30,'Melissa','tellus.id@luctus.co.uk','TBA00VAE9PT'),(31,'Tucker','sit@nascetur.org','AZS58TUC7TR'),(32,'Colby','ultrices.posuere.cubilia@ProinultricesDuis.net','VQO02ISU2XL'),(33,'Aristotle','tristique.pharetra@perinceptoshymenaeos.ca','BOM78AEI2IC'),(34,'Uta','posuere@vitae.org','RKU32FKZ4PQ'),(35,'Olga','quis.pede@Curae.org','NMT16YEX3FU'),(36,'Lana','Phasellus.in.felis@enim.net','VZK18VFP0TJ'),(37,'Quinlan','eu@turpis.edu','NTW95ZOX5RF'),(38,'Evangeline','Quisque.fringilla@mauris.co.uk','FAF12GNV6IG'),(39,'Hayden','pharetra.sed.hendrerit@tristique.ca','FHK84RDE4SZ'),(40,'Camille','Vivamus@augue.org','NZN00LFP7GL'),(41,'Elizabeth','pellentesque.tellus@nonmagnaNam.co.uk','VHP50IOO2KI'),(42,'Wayne','ligula@Crasvulputatevelit.com','OOE65AEC4AG'),(43,'Vivien','Duis.gravida@aliquetdiam.com','XSD85KNQ8QG'),(44,'Kelly','gravida.non@sit.com','TCW33DVH6HD'),(45,'Owen','Donec.luctus.aliquet@acrisusMorbi.co.uk','SKA41UIA1FI'),(46,'Nerea','feugiat.Lorem@Maurisut.com','BDL48TLC6HV'),(47,'Stone','dolor.dolor@Quisque.ca','GRJ21MTJ1PP'),(48,'Phelan','vitae@sempercursus.edu','YXS57HHE1GT'),(49,'Dawn','lobortis@Sedet.ca','FLS41RJW2NH'),(50,'Nicholas','eu.turpis.Nulla@In.ca','LLW69TUF2FI'),(51,'Ivy','Quisque.purus.sapien@pharetrasedhendrerit.net','XUB55PZC0JN'),(52,'Tarik','vulputate.eu.odio@disparturientmontes.net','RLG35ZCI4KD'),(53,'Stone','nonummy@sem.net','SJD03THS6LD'),(54,'Jordan','ultrices.posuere@egestasligula.ca','PLD04ACQ3JT'),(55,'Brent','sem.semper.erat@odioAliquam.net','VHM84MYT2CL'),(56,'Todd','parturient@ligulaAenean.com','HEP25BUT6ER'),(57,'Keefe','nisi.magna@Mauriseu.edu','TTL08RRF4DE'),(58,'Whilemina','Donec@interdum.com','IVP70ZBE6YN'),(59,'Debra','velit.eget@odioEtiam.com','BPW36EXG1CY'),(60,'Florence','eleifend@musProin.ca','PJC30UDZ6VL'),(61,'Illiana','leo@erat.edu','TVQ44URK6HC'),(62,'Kirsten','mi@faucibusorci.ca','KAX32WKV9AQ'),(63,'Kato','et@Nunc.co.uk','HAK65SME0PF'),(64,'Hilel','rutrum.Fusce@imperdietdictummagna.net','TML20HAR1ZU'),(65,'Prescott','nec.mollis.vitae@etipsumcursus.com','DPS32HAV7BO'),(66,'Wang','egestas.rhoncus.Proin@idrisusquis.org','NGU97LOY1QC'),(67,'Bree','vitae.aliquet@dolor.co.uk','FXI91IXJ4DM'),(68,'Sylvester','tellus@turpisAliquamadipiscing.com','PFV88WYI7MB'),(69,'Noelle','porta.elit.a@non.com','IGE35VUY7YW'),(70,'Chase','Phasellus.at@malesuadamalesuada.edu','LKS55ZXP0VO'),(71,'Danielle','accumsan.neque.et@quismassaMauris.co.uk','ETN10CPT5AX'),(72,'Mercedes','in@arcu.org','EIH18EZB4SN'),(73,'Rogan','tellus.Aenean.egestas@primisin.co.uk','EAY80CJF7IT'),(74,'Oren','erat@libero.co.uk','PDM01TEG6II'),(75,'Cedric','ullamcorper.viverra.Maecenas@quamquisdiam.net','DDA85UEW6KH'),(76,'Jackson','in@DonecnibhQuisque.org','WTW40ZOA2CD'),(77,'Caesar','a.facilisis.non@augueSed.edu','DOD76JDQ0HL'),(78,'Venus','tortor@penatibus.org','SYY39VII8FC'),(79,'Yoshi','sed.tortor@egetdictumplacerat.com','MEE33VRY5DS'),(80,'Linus','sodales.purus.in@ipsumPhasellusvitae.edu','TQK84TBU8AE'),(81,'Sebastian','risus@etrutrumnon.net','ZIC54YBI4PE'),(82,'Simon','tincidunt.aliquam.arcu@eros.net','OHD25QRD9UW'),(83,'Yoko','in@duiinsodales.com','UCL79QNW5CR'),(84,'Hadley','feugiat@vitaemauris.com','VSN71LMN5MB'),(85,'Cedric','purus.ac@magna.co.uk','TMJ20QMI8MD'),(86,'Omar','vel.sapien.imperdiet@ipsumcursusvestibulum.net','CLJ66FQQ2QZ'),(87,'Ahmed','Quisque@a.com','UVB19PXP2CT'),(88,'Kenneth','Nullam.feugiat.placerat@urna.net','EBY79DLA3XW'),(89,'Hakeem','consectetuer.cursus@vel.ca','KFI15RET7TD'),(90,'Tate','sagittis.lobortis@acfermentum.org','VVL62VPK2JJ'),(91,'Cain','ac@erat.net','XWR40TOT8QI'),(92,'Aphrodite','neque.non.quam@nequeNullamut.com','FCA45BWZ0HP'),(93,'Camille','Etiam.ligula.tortor@leoinlobortis.org','QZH33TFJ4YK'),(94,'Phillip','velit@Etiam.ca','KVU80YIR2SB'),(95,'Dustin','vestibulum.Mauris@ut.net','RWX91AZY6AE'),(96,'Rose','commodo.auctor.velit@euarcuMorbi.ca','SPH27GWG4RB'),(97,'Alma','Aenean.gravida@nostraper.ca','JGM77IFY2AQ'),(98,'Kyra','vulputate.nisi@ante.co.uk','LLY90BMJ8UC'),(99,'Guinevere','tempus@consequatpurusMaecenas.org','JHH70JEL3MZ'),(100,'Murphy','Duis.sit.amet@Donecdignissimmagna.edu','XCV14LIP0BY');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-31 18:36:40
