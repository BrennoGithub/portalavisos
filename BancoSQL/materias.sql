-- Tabela materia
CREATE TABLE materias(
	ID_materia int AUTO_INCREMENT PRIMARY KEY,
    nomeMateria varchar(100) NOT NULL
);
-- Cadastro materia
INSERT INTO materias(ID_materia, nomeMateria) VALUES(1, "Química");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(2, "Filosofia");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(3, "Matemática");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(4, "História");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(5, "Arquitetura de Redes");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(6, "Orientação para a Prática Profissional II");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(7, "Biologia");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(8, "Língua Portuguesa e Literatura");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(9, "Autoria Web");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(10, "Desenvolvimento de Projeto Integrador");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(11, "Organização e Manutenção de Computadores");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(12, "Programação com Acesso a Banco de Dados");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(13, "Orientação para a Prática Profissional I");
INSERT INTO materias(ID_materia, nomeMateria) VALUES(14, "Sociologia");

-- Tabela intermediaria professor-materia
CREATE TABLE professor_materia(
	ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    professor varchar(20) NOT NULL,
    FOREIGN KEY (professor) REFERENCES professores(matricula),
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);

INSERT INTO professor_materia(professor, materia) VALUES("1210907", 1);
INSERT INTO professor_materia(professor, materia) VALUES("3441856", 2);
INSERT INTO professor_materia(professor, materia) VALUES("1456703", 3);
INSERT INTO professor_materia(professor, materia) VALUES("1814262", 3);
INSERT INTO professor_materia(professor, materia) VALUES("1934732", 4);
INSERT INTO professor_materia(professor, materia) VALUES("1577142", 5);
INSERT INTO professor_materia(professor, materia) VALUES("2664007", 6);
INSERT INTO professor_materia(professor, materia) VALUES("3330062", 7);
INSERT INTO professor_materia(professor, materia) VALUES("1814194", 8);
INSERT INTO professor_materia(professor, materia) VALUES("1071759", 9);
INSERT INTO professor_materia(professor, materia) VALUES("2664007", 10);
INSERT INTO professor_materia(professor, materia) VALUES("1815949", 11);
INSERT INTO professor_materia(professor, materia) VALUES("3399615", 12);
INSERT INTO professor_materia(professor, materia) VALUES("1071759", 13);
INSERT INTO professor_materia(professor, materia) VALUES("2476638", 14);