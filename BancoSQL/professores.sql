-- Tabela professores
CREATE TABLE professores(
	matricula varchar(20) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nomeSocial varchar(100) NOT NULL,
    aniversario date NOT NULL,
    senhaSistema varchar(8) NOT NULL
);