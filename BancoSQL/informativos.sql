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
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
);

-- Tabela de dados adicionais para Eventos
CREATE TABLE dados_eventos ( 
    ID_eventos int PRIMARY KEY AUTO_INCREMENT,
    nomeEvento char(100) NOT NULL, 
    data_InicioEvento date NOT NULL,
    data_FinalEvento date NOT NULL,
    hora_InicioEvento date NOT NULL,
    hora_FinalEvento date NOT NULL, 
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
); 

-- Tabela de dados adicionais para Avaliacoes
CREATE TABLE dados_avaliacoes ( 
    ID_avaliacao int PRIMARY KEY AUTO_INCREMENT,
    tipoAvaliacao varchar(100) NOT NULL,
    assuntoAvaliacao char(100) NOT NULL,
    dataAvaliacao date NOT NULL,  
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo),
    materia int,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia)
);

-- Tabela de dados adicionais para Materiais
CREATE TABLE dados_materiais ( 
    ID_material int AUTO_INCREMENT PRIMARY KEY ,  
    assuntoMaterial char(100) NOT NULL,  
    materia int NOT NULL,
    FOREIGN KEY (materia) REFERENCES materias(ID_materia),
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo)
); 

-- Cadastro dos informativos
INSERT INTO informativos(assunto, mensagem, dataCriacao) VALUES("Aviso", "texto", "2025-12-07 HH:MM:SS");
INSERT INTO turma_informativo(turma, informativo) VALUES(1, 1);

INSERT INTO informativos(assunto, mensagem, dataCriacao) VALUES("Avaliação", "texto", "2025-12-07 HH:MM:SS");
INSERT INTO turma_informativo(turma, informativo) VALUES(1, 2);
INSERT INTO dados_avaliacoes(tipoAvaliacao, assuntoAvaliacao, dataAvaliacao, materia, informativo) 
VALUES("prova", "adição", "2025-12-07 HH:MM:SS", "matematica", 2);

INSERT INTO informativos(assunto, mensagem, dataCriacao) VALUES("Evento", "texto", "2025-12-07 HH:MM:SS");
INSERT INTO turma_informativo(turma, informativo) VALUES(1, 3);
INSERT INTO dados_eventos(nomeEvento, dataInicial_Evento, dataFinal_Evento, horaInicial_Evento, horaFinal_Evento, informativo) 
VALUES("festa da uva", "2025-12-07", "2025-12-07", "HH:MM:SS", "HH:MM:SS", 3);

INSERT INTO informativos(assunto, mensagem, dataCriacao) VALUES("Material Didatico", "texto", "2025-12-07 HH:MM:SS");
INSERT INTO turma_informativo(turma, materia, informativo) VALUES(1, 4);
INSERT INTO dados_materiais(assuntoMaterial, materia, informativo) VALUES("matematica", "matematica", 4);