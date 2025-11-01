-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01/11/2025 às 22:19
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `portal_informativo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

CREATE TABLE `alunos` (
  `matricula` varchar(20) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `nomeSocial` varchar(100) NOT NULL,
  `aniversario` date NOT NULL,
  `liderTurma` enum('True','False') DEFAULT 'False',
  `senhaSistema` varchar(8) NOT NULL,
  `turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `alunos`
--

INSERT INTO `alunos` (`matricula`, `nome`, `nomeSocial`, `aniversario`, `liderTurma`, `senhaSistema`, `turma`) VALUES
('20221144010080', 'Vitória da Silva', '', '0000-00-00', 'False', 'info80', 1),
('20231144010001', 'Matheus da Silva', '', '0000-00-00', 'False', 'info01', 1),
('20231144010003', 'Cauã de Lima', '', '0000-00-00', 'False', 'info03', 1),
('20231144010007', 'Vinícius Alves', '', '0000-00-00', 'False', 'info07', 1),
('20231144010008', 'Bruno Gustavo', '', '0000-00-00', 'False', 'info08', 1),
('20231144010009', 'Afonso Silva', '', '0000-00-00', 'False', 'info09', 1),
('20231144010015', 'Maria Gabriella', '', '0000-00-00', 'False', 'info15', 1),
('20231144010020', 'Ramon Lincon', '', '0000-00-00', 'False', 'info20', 1),
('20231144010021', 'Edvan Coelho', '', '0000-00-00', 'False', 'info21', 1),
('20231144010022', 'Breno Gusmão', '', '0000-00-00', 'False', 'info22', 1),
('20231144010023', 'Guilherme Narciso', '', '0000-00-00', 'False', 'info23', 1),
('20231144010025', 'Isadora Fernandes', '', '0000-00-00', 'False', 'info25', 1),
('20231144010027', 'Lucas de Lima', '', '0000-00-00', 'False', 'info27', 1),
('20231144010029', 'Mariana Gabrielly', '', '0000-00-00', 'False', 'info29', 1),
('20231144010030', 'Amilton de Almeida', '', '0000-00-00', 'False', 'info30', 1),
('20231144010031', 'Radmila de Souza', '', '0000-00-00', 'False', 'info31', 1),
('20231144010032', 'Davi Galdino', '', '0000-00-00', 'False', 'info32', 1),
('20231144010036', 'Adriely Daiany', '', '0000-00-00', 'False', 'info36', 1),
('20231144010040', 'Marina Ribeiro', '', '0000-00-00', 'False', 'info40', 1),
('20231144010041', 'Ingrid Beatriz', '', '0000-00-00', 'False', 'info41', 1),
('20231144010043', 'Júlio César', '', '0000-00-00', 'True', 'info43', 1),
('20231144010051', 'Harlley Rocha', '', '0000-00-00', 'False', 'info51', 1),
('20231144010052', 'Antony Gabriel', '', '0000-00-00', 'False', 'info52', 1),
('20231144010054', 'Vinícius Costa', '', '0000-00-00', 'False', 'info54', 1),
('20231144010055', 'Julia Bezerra', '', '0000-00-00', 'False', 'info55', 1),
('20231144010062', 'Fabiana Antunes', '', '0000-00-00', 'False', 'info62', 1),
('20231144010063', 'Ananda Beatriz', '', '0000-00-00', 'False', 'info63', 1),
('20231144010066', 'Alicia Martins', '', '0000-00-00', 'False', 'info66', 1),
('20231144010067', 'Maria Luisa', '', '0000-00-00', 'False', 'info67', 1),
('20231144010069', 'Mikelly da Silva', '', '0000-00-00', 'False', 'info69', 1),
('20231144010075', 'Jadson Lima', '', '0000-00-00', 'False', 'info75', 1),
('20231144010080', 'Geovana Gabriele', '', '0000-00-00', 'False', 'info80', 1),
('20231144010081', 'Ketlyn Kauany', '', '0000-00-00', 'False', 'info81', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `arquivos`
--

CREATE TABLE `arquivos` (
  `ID_arquivo` int(11) NOT NULL,
  `tipoArquivo` enum('Arquivo','Link') DEFAULT 'Arquivo',
  `dataRegistro` date DEFAULT current_timestamp(),
  `arquivo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `arquivos`
--

INSERT INTO `arquivos` (`ID_arquivo`, `tipoArquivo`, `dataRegistro`, `arquivo`) VALUES
(1, 'Arquivo', '2025-09-27', 'ARQUIVO');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cursos`
--

CREATE TABLE `cursos` (
  `ID_curso` int(11) NOT NULL,
  `nomeCurso` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cursos`
--

INSERT INTO `cursos` (`ID_curso`, `nomeCurso`) VALUES
(1, 'Informatica');

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso_materia`
--

CREATE TABLE `curso_materia` (
  `ID_relacionamento` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `curso_materia`
--

INSERT INTO `curso_materia` (`ID_relacionamento`, `curso`, `materia`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14);

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso_turma`
--

CREATE TABLE `curso_turma` (
  `ID_relacionamento` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `curso_turma`
--

INSERT INTO `curso_turma` (`ID_relacionamento`, `curso`, `turma`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `dados_avaliacoes`
--

CREATE TABLE `dados_avaliacoes` (
  `ID_avaliacao` int(11) NOT NULL,
  `tipoAvaliacao` varchar(100) NOT NULL,
  `assuntoAvaliacao` char(100) NOT NULL,
  `dataAvaliacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `informativo` int(11) NOT NULL,
  `materia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dados_avaliacoes`
--

INSERT INTO `dados_avaliacoes` (`ID_avaliacao`, `tipoAvaliacao`, `assuntoAvaliacao`, `dataAvaliacao`, `informativo`, `materia`) VALUES
(1, 'prova', 'adição', '2025-12-07 03:00:00', 2, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `dados_eventos`
--

CREATE TABLE `dados_eventos` (
  `ID_eventos` int(11) NOT NULL,
  `nomeEvento` char(100) NOT NULL,
  `data_InicioEvento` date NOT NULL,
  `data_FinalEvento` date NOT NULL,
  `hora_InicioEvento` time NOT NULL,
  `hora_FinalEvento` time NOT NULL,
  `informativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dados_eventos`
--

INSERT INTO `dados_eventos` (`ID_eventos`, `nomeEvento`, `data_InicioEvento`, `data_FinalEvento`, `hora_InicioEvento`, `hora_FinalEvento`, `informativo`) VALUES
(1, 'festa da uva', '2025-12-07', '2025-12-07', '00:00:00', '00:00:00', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `dados_materiais`
--

CREATE TABLE `dados_materiais` (
  `ID_material` int(11) NOT NULL,
  `assuntoMaterial` char(100) NOT NULL,
  `materia` int(11) NOT NULL,
  `informativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dados_materiais`
--

INSERT INTO `dados_materiais` (`ID_material`, `assuntoMaterial`, `materia`, `informativo`) VALUES
(1, 'matematica', 1, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `informativos`
--

CREATE TABLE `informativos` (
  `ID_informativo` int(11) NOT NULL,
  `assunto` varchar(100) DEFAULT 'Sem assunto',
  `mensagem` text NOT NULL,
  `dataCriacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `informativos`
--

INSERT INTO `informativos` (`ID_informativo`, `assunto`, `mensagem`, `dataCriacao`) VALUES
(1, 'Aviso', 'texto', '2025-12-07 03:00:00'),
(2, 'Avaliação', 'texto', '2025-12-07 03:00:00'),
(3, 'Evento', 'texto', '2025-12-07 03:00:00'),
(4, 'Material Didatico', 'texto', '2025-12-07 03:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `informativo_arquivo`
--

CREATE TABLE `informativo_arquivo` (
  `ID_relacionamento` int(11) NOT NULL,
  `informativo` int(11) NOT NULL,
  `arquivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `informativo_arquivo`
--

INSERT INTO `informativo_arquivo` (`ID_relacionamento`, `informativo`, `arquivo`) VALUES
(1, 4, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `materias`
--

CREATE TABLE `materias` (
  `ID_materia` int(11) NOT NULL,
  `nomeMateria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `materias`
--

INSERT INTO `materias` (`ID_materia`, `nomeMateria`) VALUES
(1, 'Química'),
(2, 'Filosofia'),
(3, 'Matemática'),
(4, 'História'),
(5, 'Arquitetura de Redes'),
(6, 'Orientação para a Prática Profissional II'),
(7, 'Biologia'),
(8, 'Língua Portuguesa e Literatura'),
(9, 'Autoria Web'),
(10, 'Desenvolvimento de Projeto Integrador'),
(11, 'Organização e Manutenção de Computadores'),
(12, 'Programação com Acesso a Banco de Dados'),
(13, 'Orientação para a Prática Profissional I'),
(14, 'Sociologia');

-- --------------------------------------------------------

--
-- Estrutura para tabela `professores`
--

CREATE TABLE `professores` (
  `matricula` varchar(20) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `nomeSocial` varchar(100) NOT NULL,
  `aniversario` date NOT NULL,
  `senhaSistema` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `professores`
--

INSERT INTO `professores` (`matricula`, `nome`, `nomeSocial`, `aniversario`, `senhaSistema`) VALUES
('1071759', 'Daniel Aguiar da Silva Oliveira Carvalho', '', '0000-00-00', 'prof759'),
('1210907', 'Janduir Egito da Silva', '', '0000-00-00', 'prof907'),
('1456703', 'Carlos Eduardo de Lima Duarte', '', '0000-00-00', 'prof703'),
('1577142', 'Jurandy Martins Soares Junior', '', '0000-00-00', 'prof142'),
('1814194', 'Alisson Diego Dias de Medeiros', '', '0000-00-00', 'prof194'),
('1814262', 'Jose Rauryson Alves Bezerra', '', '0000-00-00', 'prof262'),
('1815949', 'Zulmar Jofli dos Santos Junior', '', '0000-00-00', 'prof949'),
('1934732', 'Ricardo Jose Vilar da Costa', '', '0000-00-00', 'prof732'),
('2476638', 'Lucia de Fatima Vieira da Costa', '', '0000-00-00', 'prof638'),
('2664007', 'Alvaro Hermano da Silva', '', '0000-00-00', 'prof007'),
('3330062', 'Andrea Pereira da Silva', '', '0000-00-00', 'prof062'),
('3399615', 'Renan Alves de Morais Rocha', '', '0000-00-00', 'prof615'),
('3441856', 'Antonio Douglas Sampaio Ramalho', '', '0000-00-00', 'prof856');

-- --------------------------------------------------------

--
-- Estrutura para tabela `professor_materia`
--

CREATE TABLE `professor_materia` (
  `ID_relacionamento` int(11) NOT NULL,
  `professor` varchar(20) NOT NULL,
  `materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `professor_materia`
--

INSERT INTO `professor_materia` (`ID_relacionamento`, `professor`, `materia`) VALUES
(1, '1210907', 1),
(2, '3441856', 2),
(3, '1456703', 3),
(4, '1814262', 3),
(5, '1934732', 4),
(6, '1577142', 5),
(7, '2664007', 6),
(8, '3330062', 7),
(9, '1814194', 8),
(10, '1071759', 9),
(11, '2664007', 10),
(12, '1815949', 11),
(13, '3399615', 12),
(14, '1071759', 13),
(15, '2476638', 14);

-- --------------------------------------------------------

--
-- Estrutura para tabela `turmas`
--

CREATE TABLE `turmas` (
  `ID_turma` int(11) NOT NULL,
  `nomeTurma` varchar(100) NOT NULL,
  `dataCriacao` date DEFAULT curdate(),
  `turno` enum('Matutino','Vespertino') NOT NULL,
  `periodo` enum('1','2','3','4') DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `turmas`
--

INSERT INTO `turmas` (`ID_turma`, `nomeTurma`, `dataCriacao`, `turno`, `periodo`) VALUES
(1, 'INFO 3V', '2025-09-27', 'Vespertino', '3');

-- --------------------------------------------------------

--
-- Estrutura para tabela `turma_informativo`
--

CREATE TABLE `turma_informativo` (
  `ID_relacionamento` int(11) NOT NULL,
  `turma` int(11) NOT NULL,
  `informativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `turma_informativo`
--

INSERT INTO `turma_informativo` (`ID_relacionamento`, `turma`, `informativo`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `turma` (`turma`);

--
-- Índices de tabela `arquivos`
--
ALTER TABLE `arquivos`
  ADD PRIMARY KEY (`ID_arquivo`);

--
-- Índices de tabela `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`ID_curso`);

--
-- Índices de tabela `curso_materia`
--
ALTER TABLE `curso_materia`
  ADD PRIMARY KEY (`ID_relacionamento`),
  ADD KEY `curso` (`curso`),
  ADD KEY `materia` (`materia`);

--
-- Índices de tabela `curso_turma`
--
ALTER TABLE `curso_turma`
  ADD PRIMARY KEY (`ID_relacionamento`),
  ADD KEY `curso` (`curso`),
  ADD KEY `turma` (`turma`);

--
-- Índices de tabela `dados_avaliacoes`
--
ALTER TABLE `dados_avaliacoes`
  ADD PRIMARY KEY (`ID_avaliacao`),
  ADD KEY `informativo` (`informativo`),
  ADD KEY `materia` (`materia`);

--
-- Índices de tabela `dados_eventos`
--
ALTER TABLE `dados_eventos`
  ADD PRIMARY KEY (`ID_eventos`),
  ADD KEY `informativo` (`informativo`);

--
-- Índices de tabela `dados_materiais`
--
ALTER TABLE `dados_materiais`
  ADD PRIMARY KEY (`ID_material`),
  ADD KEY `materia` (`materia`),
  ADD KEY `informativo` (`informativo`);

--
-- Índices de tabela `informativos`
--
ALTER TABLE `informativos`
  ADD PRIMARY KEY (`ID_informativo`);

--
-- Índices de tabela `informativo_arquivo`
--
ALTER TABLE `informativo_arquivo`
  ADD PRIMARY KEY (`ID_relacionamento`),
  ADD KEY `informativo` (`informativo`),
  ADD KEY `arquivo` (`arquivo`);

--
-- Índices de tabela `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_materia`);

--
-- Índices de tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`matricula`);

--
-- Índices de tabela `professor_materia`
--
ALTER TABLE `professor_materia`
  ADD PRIMARY KEY (`ID_relacionamento`),
  ADD KEY `professor` (`professor`),
  ADD KEY `materia` (`materia`);

--
-- Índices de tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`ID_turma`);

--
-- Índices de tabela `turma_informativo`
--
ALTER TABLE `turma_informativo`
  ADD PRIMARY KEY (`ID_relacionamento`),
  ADD KEY `turma` (`turma`),
  ADD KEY `informativo` (`informativo`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `arquivos`
--
ALTER TABLE `arquivos`
  MODIFY `ID_arquivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cursos`
--
ALTER TABLE `cursos`
  MODIFY `ID_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `curso_materia`
--
ALTER TABLE `curso_materia`
  MODIFY `ID_relacionamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `curso_turma`
--
ALTER TABLE `curso_turma`
  MODIFY `ID_relacionamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `dados_avaliacoes`
--
ALTER TABLE `dados_avaliacoes`
  MODIFY `ID_avaliacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `dados_eventos`
--
ALTER TABLE `dados_eventos`
  MODIFY `ID_eventos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `dados_materiais`
--
ALTER TABLE `dados_materiais`
  MODIFY `ID_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `informativos`
--
ALTER TABLE `informativos`
  MODIFY `ID_informativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `informativo_arquivo`
--
ALTER TABLE `informativo_arquivo`
  MODIFY `ID_relacionamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `materias`
--
ALTER TABLE `materias`
  MODIFY `ID_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `professor_materia`
--
ALTER TABLE `professor_materia`
  MODIFY `ID_relacionamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `ID_turma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `turma_informativo`
--
ALTER TABLE `turma_informativo`
  MODIFY `ID_relacionamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `alunos_ibfk_1` FOREIGN KEY (`turma`) REFERENCES `turmas` (`ID_turma`);

--
-- Restrições para tabelas `curso_materia`
--
ALTER TABLE `curso_materia`
  ADD CONSTRAINT `curso_materia_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `cursos` (`ID_curso`),
  ADD CONSTRAINT `curso_materia_ibfk_2` FOREIGN KEY (`materia`) REFERENCES `materias` (`ID_materia`);

--
-- Restrições para tabelas `curso_turma`
--
ALTER TABLE `curso_turma`
  ADD CONSTRAINT `curso_turma_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `cursos` (`ID_curso`),
  ADD CONSTRAINT `curso_turma_ibfk_2` FOREIGN KEY (`turma`) REFERENCES `turmas` (`ID_turma`);

--
-- Restrições para tabelas `dados_avaliacoes`
--
ALTER TABLE `dados_avaliacoes`
  ADD CONSTRAINT `dados_avaliacoes_ibfk_1` FOREIGN KEY (`informativo`) REFERENCES `informativos` (`ID_informativo`),
  ADD CONSTRAINT `dados_avaliacoes_ibfk_2` FOREIGN KEY (`materia`) REFERENCES `materias` (`ID_materia`);

--
-- Restrições para tabelas `dados_eventos`
--
ALTER TABLE `dados_eventos`
  ADD CONSTRAINT `dados_eventos_ibfk_1` FOREIGN KEY (`informativo`) REFERENCES `informativos` (`ID_informativo`);

--
-- Restrições para tabelas `dados_materiais`
--
ALTER TABLE `dados_materiais`
  ADD CONSTRAINT `dados_materiais_ibfk_1` FOREIGN KEY (`materia`) REFERENCES `materias` (`ID_materia`),
  ADD CONSTRAINT `dados_materiais_ibfk_2` FOREIGN KEY (`informativo`) REFERENCES `informativos` (`ID_informativo`);

--
-- Restrições para tabelas `informativo_arquivo`
--
ALTER TABLE `informativo_arquivo`
  ADD CONSTRAINT `informativo_arquivo_ibfk_1` FOREIGN KEY (`informativo`) REFERENCES `informativos` (`ID_informativo`),
  ADD CONSTRAINT `informativo_arquivo_ibfk_2` FOREIGN KEY (`arquivo`) REFERENCES `arquivos` (`ID_arquivo`);

--
-- Restrições para tabelas `professor_materia`
--
ALTER TABLE `professor_materia`
  ADD CONSTRAINT `professor_materia_ibfk_1` FOREIGN KEY (`professor`) REFERENCES `professores` (`matricula`),
  ADD CONSTRAINT `professor_materia_ibfk_2` FOREIGN KEY (`materia`) REFERENCES `materias` (`ID_materia`);

--
-- Restrições para tabelas `turma_informativo`
--
ALTER TABLE `turma_informativo`
  ADD CONSTRAINT `turma_informativo_ibfk_1` FOREIGN KEY (`turma`) REFERENCES `turmas` (`ID_turma`),
  ADD CONSTRAINT `turma_informativo_ibfk_2` FOREIGN KEY (`informativo`) REFERENCES `informativos` (`ID_informativo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
