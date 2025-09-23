-- Tabela informativos
CREATE TABLE informativos ( 
    ID_informativo int AUTO_INCREMENT PRIMARY KEY,  
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
CREATE TABLE Dados_Materiais ( 
    ID_material int AUTO_INCREMENT PRIMARY KEY ,  
    assuntoMaterial char(100) NOT NULL,  
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia),
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
); 