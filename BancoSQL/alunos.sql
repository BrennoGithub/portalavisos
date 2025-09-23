-- Tabela alunos
CREATE TABLE alunos(
    matricula varchar(20) PRIMARY KEY,  
    nome varchar(100) NOT NULL,  
    nomeSocial varchar(100) NOT NULL,
    aniversario date NOT NULL,  
    pronome varchar(20) DEFAULT 'Não informado',  
    statusTurma ENUM("liderTurma","comun") DEFAULT 'comun',  
    senhaSistema varchar(8) NOT NULL,
    turma int NOT NULL,
    FOREIGN KEY (turma) REFERENCES turmas(ID_turma)
);

-- Cadastro de alunos
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010036","Adriely Daiany", "comun", "info36", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010009","Afonso Silva", "comun", "info09", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010066","Alicia Martins", "comun", "info66", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010030","Amilton de Almeida", "comun", "info30", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010063","Ananda Beatriz", "comun", "info63", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010052","Antony Gabriel", "comun", "info52", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010022","Breno Gusmão", "comun", "info22", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010008","Bruno Gustavo", "comun", "info08", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010003","Cauã de Lima", "comun", "info03", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010032","Davi Galdino", "comun", "info32", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010021","Edvan Coelho", "comun", "info21", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010062","Fabiana Antunes", "comun", "info62", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010080","Geovana Gabriele", "comun", "info80", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010023","Guilherme Narciso", "comun", "info23", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010051","Harlley Rocha", "comun", "info51", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010041","Ingrid Beatriz", "comun", "info41", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010025","Isadora Fernandes", "comun", "info25", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010075","Jadson Lima", "comun", "info75", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010055","Julia Bezerra", "comun", "info55", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010043","Júlio Cesar", "liderTurma", "info43", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010081","Ketlyn Kauany", "comun", "info81", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010027","Lucas de Lima", "comun", "info27", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010015","Maria Gabriella", "comun", "info15", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010067","Maria Luisa", "comun", "info67", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010029","Mariana Gabrielly", "comun", "info29", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010040","Marina Ribeiro", "comun", "info40", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010001","Matheus da Silva", "comun", "info01", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010069","Mikelly da Silva", "comun", "info69", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010031","Radmila de Souza", "comun", "info31", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010020","Ramon Lincon", "comun", "info20", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010007","Vinícius Alves", "comun", "info07", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010054","Vinícius Costa", "comun", "info54", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20221144010080","Vitória da Silva", "comun", "info80", 1);