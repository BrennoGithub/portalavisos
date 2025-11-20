-- Tabela cursos
CREATE TABLE cursos(
	ID_curso int AUTO_INCREMENT PRIMARY KEY,
    nomeCurso varchar(100) NOT NULL
);
-- Cadastro de curso
INSERT INTO cursos(nomeCurso) VALUES("Informatica");

-- Tabela intermediaria curso-materia
CREATE TABLE curso_materia(
	ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    curso int NOT NULL,
    FOREIGN KEY (curso) REFERENCES cursos(ID_curso),
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);
INSERT INTO curso_materia(curso, materia) VALUES(1, 1);
INSERT INTO curso_materia(curso, materia) VALUES(1, 2);
INSERT INTO curso_materia(curso, materia) VALUES(1, 3);
INSERT INTO curso_materia(curso, materia) VALUES(1, 4);
INSERT INTO curso_materia(curso, materia) VALUES(1, 5);
INSERT INTO curso_materia(curso, materia) VALUES(1, 6);
INSERT INTO curso_materia(curso, materia) VALUES(1, 7);
INSERT INTO curso_materia(curso, materia) VALUES(1, 8);
INSERT INTO curso_materia(curso, materia) VALUES(1, 9);
INSERT INTO curso_materia(curso, materia) VALUES(1, 10);
INSERT INTO curso_materia(curso, materia) VALUES(1, 11);
INSERT INTO curso_materia(curso, materia) VALUES(1, 12);
INSERT INTO curso_materia(curso, materia) VALUES(1, 13);
INSERT INTO curso_materia(curso, materia) VALUES(1, 14);
