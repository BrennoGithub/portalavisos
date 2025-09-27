-- Tabela de arquivos anexados aos informativos
CREATE TABLE arquivos ( 
    ID_arquivo int AUTO_INCREMENT PRIMARY KEY,  
    tipoArquivo ENUM("Arquivo", "Link") DEFAULT "Arquivo",
    dataRegistro date DEFAULT CURRENT_TIMESTAMP,
    arquivo text NOT NULL 
);
INSERT INTO arquivos(tipoArquivo, arquivo) VALUES("Arquivo", "ARQUIVO");

-- Tabela intermediaria arquivo-informativo
CREATE TABLE informativo_arquivo ( 
    ID_relacionamento int AUTO_INCREMENT PRIMARY KEY,  
    informativo int NOT NULL,
    FOREIGN KEY (informativo) REFERENCES informativos(ID_informativo),
    arquivo int NOT NULL,
    FOREIGN KEY (arquivo) REFERENCES arquivos(ID_arquivo)
);
INSERT INTO informativo_arquivo(informativo, arquivo) VALUES(4, 1);