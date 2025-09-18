-- Criação de banco de dados Portal Informativo
CREATE DATABASE portal_informativo;

-- Tabela professores
CREATE TABLE professores(
	matricula varchar(10) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nomeSocial varchar(100) NOT NULL DEFAULT 'Não informado',
    pronome varchar(10) NOT NULL,
    senhaSistema varchar(8) NOT NULL
);

-- Tabela materia
CREATE TABLE materias(
	ID_materia int AUTO_INCREMENT PRIMARY KEY,
    nomeMateria varchar(100) NOT NULL
);

-- Tabela intermediaria professor-materia
CREATE TABLE professor_materia(
	ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    professor int NOT NULL,
    FOREIGN KEY (professor) REFERENCES professores(matricula),
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);

-- Tabela cursos
CREATE TABLE cursos(
	ID_curso int PRIMARY KEY,
    nomeCurso varchar(100) NOT NULL
);

-- Tabela intermediaria curso-materia
CREATE TABLE curso_materia(
	ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,
    curso int NOT NULL,
    FOREIGN KEY (curso) REFERENCES cursos(ID_curso),
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);

-- Tabela turmas
CREATE TABLE turmas(
 ID_turma INT PRIMARY KEY AUTO_INCREMENT,  
 NomeTurma VARCHAR(100) NOT NULL,  
 Turno varchar(100) NOT NULL,  
 Ano DATE NOT NULL,  
 Periodo INT NOT NULL,
 curso int NOT NULL,
 FOREIGN KEY (curso) REFERENCES cursos(ID_curso)
);

-- Tabela alunos
CREATE TABLE alunos(
 matricula varchar(10) PRIMARY KEY,  
 nome varchar(100) NOT NULL,  
 nomeSocial varchar(100) NOT NULL,  
 pronome varchar(10) NOT NULL DEFAULT 'Não informado',  
 statusTurma varchar(40) NOT NULL DEFAULT 'Aluno',  
 senhaSistema varchar(8) NOT NULL,
 turma int NOT NULL,
 FOREIGN KEY (turma) REFERENCES turmas(ID_turma)
);