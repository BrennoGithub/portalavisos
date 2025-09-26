-- Tabela professores
CREATE TABLE professores(
	matricula varchar(20) NOT NULL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    nomeSocial varchar(100) NOT NULL,
    aniversario date NOT NULL,
    senhaSistema varchar(8) NOT NULL
);
-- Cadastro de professores
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1210907","Janduir Egito da Silva","prof907");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("3441856","Antonio Douglas Sampaio Ramalho","prof856");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1456703","Carlos Eduardo de Lima Duarte","prof703");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1814262","Jose Rauryson Alves Bezerra","prof262");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1934732","Ricardo Jose Vilar da Costa","prof732");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1577142","Jurandy Martins Soares Junior","prof142");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("2664007","Alvaro Hermano da Silva","prof007");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("3330062","Andrea Pereira da Silva","prof062");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1814194","Alisson Diego Dias de Medeiros","prof194");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1071759","Daniel Aguiar da Silva Oliveira Carvalho","prof759");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("2664007","Alvaro Hermano da Silva","prof007");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1815949","Zulmar Jofli dos Santos Junior","prof949");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("3399615","Renan Alves de Morais Rocha","prof615");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("1071759","Daniel Aguiar da Silva Oliveira Carvalho","prof759");
INSERT INTO professores(matricula, nome, senhaSistema) VALUES("2476638","Lucia de Fatima Vieira da Costa","prof638");