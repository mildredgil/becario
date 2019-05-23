CREATE DATABASE `becario` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `escuela` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre_escuela` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `departamento` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_escuela` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
	FOREIGN KEY(`id_escuela`) REFERENCES Escuela(`id`) --FK
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `colaboradores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nomina` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido_materno` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido_paterno` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `profesor_sn` tinyint(1) NOT NULL,
  `tipo_contrato` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_departamento` int(11) NOT NULL,
  `oficina` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
	`requiere_becario` int(10) DEFAULT 0, NOT NULL, 
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `colaboradores_nomina_unique` (`nomina`),
	FOREIGN KEY (`id_departamento`) REFERENCES Departamento(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `carrera` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `siglas_carrera` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `carrera_nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_escuela` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `carrera_siglas_carrera_unique` (`siglas_carrera`)
	FOREIGN KEY(`id_departamento`) REFERENCES Departamento(`id`), --FK
  FOREIGN KEY(`id_escuela`) REFERENCES Escuela(`id`) --FK
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--Becas
/*
CREATE TABLE Becas(
    idBeca INT PRIMARY KEY,
    nombre VARCHAR(100)
);
*/

CREATE TABLE `estudiante` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `matricula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido_materno` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido_paterno` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `semestre_actual` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL,
  `asignable_sn` tinyint(1) NOT NULL,
  `estatus_assignable_sn` tinyint(1) NOT NULL,
  `tipo_beca` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `estudiante_matricula_unique` (`matricula`),
	FOREIGN KEY (`id_carrera`) REFERENCES Carrera(`id`),
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `solicitud_becaria` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`aceptada` tinyint(1) NOT NULL,
  `id_colaborador` int(11) NOT NULL,
  `id_estudiante` int(11) NOT NULL,
  `periodo` int(11) NOT NULL,
  `fecha_asignacion` datetime NOT NULL,
  `fecha_aceptacion` datetime NOT NULL,
  `evaluacion` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
	FOREIGN KEY (`id_colaborador`) REFERENCES Colaboradores(`nomina`), 
  FOREIGN KEY (`id_estudiante`) REFERENCES estudiante(`matricula`) 
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;











