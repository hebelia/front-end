-- MySQL Script generated by MySQL Workbench
-- Tue Dec  6 16:51:11 2022
-- Model: Sakila Full    Version: 2.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db` ;
USE `db` ;

-- -----------------------------------------------------
-- Table `db`.`person`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`person` (
  `id` INT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `pfp` LONGTEXT NOT NULL,
  `about` LONGTEXT NOT NULL,
  `banner` LONGTEXT NOT NULL,
  `license` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `db`.`social`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`social` (
  `id` INT NULL AUTO_INCREMENT,
  `url` LONGTEXT NOT NULL,
  `icon` VARCHAR(25) NOT NULL,
  `person_person_id` INT NOT NULL,
  PRIMARY KEY (`id`, `person_person_id`),
  INDEX `fk_social_person1_idx` (`person_person_id` ASC),
  CONSTRAINT `fk_social_person1`
    FOREIGN KEY (`person_person_id`)
    REFERENCES `db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `db`.`course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`course` (
  `id` INT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `institution` VARCHAR(50) NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `person_person_id` INT NOT NULL,
  PRIMARY KEY (`id`, `person_person_id`),
  INDEX `fk_course_person1_idx` (`person_person_id` ASC),
  CONSTRAINT `fk_course_person1`
    FOREIGN KEY (`person_person_id`)
    REFERENCES `db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `db`.`job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`job` (
  `id` INT NULL AUTO_INCREMENT,
  `place` VARCHAR(50) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `person_person_id` INT NOT NULL,
  PRIMARY KEY (`id`, `person_person_id`),
  INDEX `fk_job_person1_idx` (`person_person_id` ASC),
  CONSTRAINT `fk_job_person1`
    FOREIGN KEY (`person_person_id`)
    REFERENCES `db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `db`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`project` (
  `id` INT NULL AUTO_INCREMENT,
  `url` LONGTEXT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `person_person_id` INT NOT NULL,
  PRIMARY KEY (`id`, `person_person_id`),
  INDEX `fk_project_person1_idx` (`person_person_id` ASC),
  CONSTRAINT `fk_project_person1`
    FOREIGN KEY (`person_person_id`)
    REFERENCES `db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `db`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db`.`skill` (
  `id` INT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NOT NULL,
  `percentage` DECIMAL(10,0) NOT NULL,
  `person_person_id` INT NOT NULL,
  PRIMARY KEY (`id`, `person_person_id`),
  INDEX `fk_skill_person1_idx` (`person_person_id` ASC),
  CONSTRAINT `fk_skill_person1`
    FOREIGN KEY (`person_person_id`)
    REFERENCES `db`.`person` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
