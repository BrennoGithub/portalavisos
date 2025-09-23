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