---
postion: 1
title: Base de donnée
---

Ajoutez les tables sql pour les factions (new update comming)

```sql
ALTER TABLE `users`
ADD `faction` VARCHAR(20) NULL DEFAULT 'nofaction',
ADD `faction_grade` INT NULL DEFAULT 0;

CREATE TABLE `faction_grades` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`faction_name` VARCHAR(50) DEFAULT NULL,
	`grade` INT NOT NULL,
	`name` VARCHAR(50) NOT NULL,
	`label` VARCHAR(50) NOT NULL,
	`salary` INT NULL DEFAULT 0,
	`skin_male` LONGTEXT NULL DEFAULT '{}',
	`skin_female` LONGTEXT NULL DEFAULT '{}',

	PRIMARY KEY (`id`)
) ENGINE=InnoDB;
INSERT INTO `faction_grades` VALUES (1,'nofaction',0,'nofaction','Sans faction',0,'{}','{}');

CREATE TABLE `factions` (
	`name` VARCHAR(50) NOT NULL,
	`label` VARCHAR(50) DEFAULT NULL,

	PRIMARY KEY (`name`)
) ENGINE=InnoDB;
INSERT INTO `factions` VALUES ('nofaction','Faction');
```
