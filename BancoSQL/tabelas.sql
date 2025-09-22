-- Criação de banco de dados Portal Informativo
CREATE DATABASE portal_informativo;

-- Tabela professores
CREATE TABLE professores(
	matricula varchar(20) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nomeSocial varchar(100) NOT NULL,
    pronome varchar(20) DEFAULT 'Não informado',
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
    ID_turma int PRIMARY KEY AUTO_INCREMENT,  
    nomeTurma varchar(100) NOT NULL,
    dataCriacao date DEFAULT CURRENT_DATE, 
    turno ENUM("Matutino","Vespertino") NOT NULL,   
    periodo ENUM(1,2,3,4) NOT NULL,
    curso int NOT NULL,
    FOREIGN KEY (curso) REFERENCES cursos(ID_curso)
);

-- Tabela alunos
CREATE TABLE alunos(
    matricula varchar(20) PRIMARY KEY,  
    nome varchar(100) NOT NULL,  
    nomeSocial varchar(100) NOT NULL,  
    pronome varchar(20) DEFAULT 'Não informado',  
    statusTurma varchar(40) NOT NULL DEFAULT 'Aluno',  
    senhaSistema varchar(8) NOT NULL,
    turma int NOT NULL,
    FOREIGN KEY (turma) REFERENCES turmas(ID_turma)
);

-- Tabela informativos
CREATE TABLE informativos ( 
    ID_informativo int PRIMARY KEY AUTO_INCREMENT,  
    assunto varchar(100) DEFAULT "Sem assunto",  
    mensagem text NOT NULL,  
    dataCriacao date DEFAULT CURRENT_TIMESTAMP
); 

-- Tabela intermediaria turma-informativos
CREATE TABLE turma_informativo ( 
    ID_relacionamento int PRIMARY KEY AUTO_INCREMENT,  
    turma int NOT NULL,
    FOREIGN KEY (turma) REFERENCES turmas(ID_turma),
    informativos int NOT NULL,
    FOREIGN KEY (informativos) REFERENCES informativos(ID_informativo)
);

-- Tabela de dados adicionais para Eventos
CREATE TABLE Dados_Eventos ( 
 ID_eventos int PRIMARY KEY AUTO_INCREMENT,
 nomeEvento char(100) NOT NULL, 
 data_InicioEvento date NOT NULL,  
 hora_InicioEvento date NOT NULL,
 data_FinalEvento date NOT NULL,  
 hora_FinalEvento date NOT NULL, 
 informativo int NOT NULL,
 FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
); 

-- Tabela de dados adicionais para Avaliacoes
CREATE TABLE Dados_Avaliacoes ( 
 ID_avaliacao int PRIMARY KEY AUTO_INCREMENT,
 tipoAvaliacao varchar(100) NOT NULL,
 assuntoAvaliacao char(100) NOT NULL,
 dataAvaliacao date NOT NULL,  
 horaAvaliacao date NOT NULL,  
 informativo int NOT NULL,
 FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo),
 materia int,
 FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);

-- Tabela de dados adicionais para Materiais
CREATE TABLE Dados_MaterialDidatico ( 
 ID_material INT PRIMARY KEY AUTO_INCREMENT,  
 assuntoMaterial CHAR(100) NOT NULL,  
 materia INT NOT NULL,
 FOREIGN KEY (materia) REFERENCES materias(ID_materia),
 informativo INT NOT NULL,
 FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
); 

-- Tabela de arquivos anexados aos informativos
CREATE TABLE arquivos ( 
 ID_arquivo INT PRIMARY KEY AUTO_INCREMENT,  
 tipoArquivo ENUM("Arquivo", "Link") DEFAULT "Arquivo",  
 arquivo CHAR(200) NOT NULL 
); 

-- Tabela intermediaria arquivo-informativo
CREATE TABLE informativos_arquivos ( 
 ID_relacionamento INT PRIMARY KEY AUTO_INCREMENT,  
 informativo INT NOT NULL,
 FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo),
 arquivo INT NOT NULL,
 FOREIGN KEY (arquivo) REFERENCES arquivos(ID_arquivo)
); 