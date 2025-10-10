-- Tabela turmas
CREATE TABLE turmas(
    ID_turma int AUTO_INCREMENT PRIMARY KEY,  
    nomeTurma varchar(100) NOT NULL,
    dataCriacao date DEFAULT CURRENT_DATE, 
    turno ENUM("Matutino","Vespertino") NOT NULL,   
    periodo ENUM("1","2","3","4") DEFAULT "1"
);

-- Cadastro de turma
INSERT INTO turmas(nomeTurma, turno, periodo) VALUES("INFO 3V", "Vespertino", "3");

-- Tabela intermediaria curso-turma
CREATE TABLE curso_turma(
    ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    curso int NOT NULL,
    FOREIGN KEY (curso) REFERENCES cursos(ID_curso),
    turma int NOT NULL,
    FOREIGN KEY (turma) REFERENCES turmas(ID_turma)
);
-- Cadastro de relacionamento de curso e turma
INSERT INTO curso_turma(curso, turma) VALUES(1,1);

