-- Tabela materia
CREATE TABLE materias(
	ID_materia int AUTO_INCREMENT PRIMARY KEY,
    nomeMateria varchar(100) NOT NULL
);
-- Cadastro materia
INSERT INTO materias(nomeMateria) VALUES("Matemática");

-- Tabela intermediaria professor-materia
CREATE TABLE professor_materia(
	ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    professor varchar(20) NOT NULL,
    FOREIGN KEY (professor) REFERENCES professores(matricula),
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);