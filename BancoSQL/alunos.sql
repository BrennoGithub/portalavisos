-- Tabela alunos
CREATE TABLE alunos(
    matricula varchar(20) PRIMARY KEY,  
    nome varchar(100) NOT NULL,  
    nomeSocial varchar(100) NOT NULL,
    aniversario date NOT NULL,  
    liderTurma ENUM("True","False") DEFAULT "False",  
    senhaSistema varchar(8) NOT NULL,
    turma int NOT NULL,
    FOREIGN KEY (turma) REFERENCES turmas(ID_turma)
);

-- Cadastro de alunos
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010036","Adriely Daiany", "False", "info36", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010009","Afonso Silva", "False", "info09", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010066","Alicia Martins", "False", "info66", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010030","Amilton de Almeida", "False", "info30", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010063","Ananda Beatriz", "False", "info63", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010052","Antony Gabriel", "False", "info52", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010022","Breno Gusmão", "False", "info22", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010008","Bruno Gustavo", "False", "info08", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010003","Cauã de Lima", "False", "info03", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010032","Davi Galdino", "False", "info32", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010021","Edvan Coelho", "False", "info21", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010062","Fabiana Antunes", "False", "info62", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010080","Geovana Gabriele", "False", "info80", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010023","Guilherme Narciso", "False", "info23", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010051","Harlley Rocha", "False", "info51", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010041","Ingrid Beatriz", "False", "info41", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010025","Isadora Fernandes", "False", "info25", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010075","Jadson Lima", "False", "info75", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010055","Julia Bezerra", "False", "info55", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010043","Júlio Cesar", "True", "info43", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010081","Ketlyn Kauany", "False", "info81", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010027","Lucas de Lima", "False", "info27", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010015","Maria Gabriella", "False", "info15", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010067","Maria Luisa", "False", "info67", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010029","Mariana Gabrielly", "False", "info29", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010040","Marina Ribeiro", "False", "info40", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010001","Matheus da Silva", "False", "info01", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010069","Mikelly da Silva", "False", "info69", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010031","Radmila de Souza", "False", "info31", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010020","Ramon Lincon", "False", "info20", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010007","Vinícius Alves", "False", "info07", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20231144010054","Vinícius Costa", "False", "info54", 1);
INSERT INTO alunos(matricula, nome, statusTurma, senhaSistema, turma) VALUES("20221144010080","Vitória da Silva", "False", "info80", 1);