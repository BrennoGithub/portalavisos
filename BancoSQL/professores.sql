-- Criação de banco de dados Portal Informativo
CREATE DATABASE portal_informativo;

-- Tabela professores
CREATE TABLE professores(
	matricula varchar(20) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nomeSocial varchar(100) NOT NULL,
    aniversario date NOT NULL,
    pronome varchar(20) DEFAULT 'Não informado', -- Remover
    senhaSistema varchar(8) NOT NULL
);