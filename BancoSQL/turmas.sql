-- Tabela turmas
CREATE TABLE turmas(
    ID_turma int AUTO_INCREMENT PRIMARY KEY,  
    nomeTurma varchar(100) NOT NULL,
    dataCriacao date DEFAULT CURRENT_date, 
    turno ENUM("Matutino","Vespertino") NOT NULL,   
    periodo ENUM("1","2","3","4") DEFAULT "1",
    curso int NOT NULL,
    FOREIGN KEY (curso) REFERENCES cursos(ID_curso)
);

-- Cadastro de turma
INSERT INTO turmas(nomeTurma, turno, periodo, curso) VALUES("INFO 3V", "Vespertino", "3", 1);
