from app  import db

#Ao criar a classe, der o nome da tabela

class Autor(db.Model):
    ID_autor = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)


class Professores(db.Model):
    matricula = ""
    nome = ""
    nomeSocial = ""
    aniversario = ""
    senhaSistema = ""

class Materias(db.Model):
    ID_materia = ""
    nomeMateria = ""

class Professor_materia(db.Model):
    ID_relacionamento = ""
    professor = ""
    materia = ""

class Curso(db.Model):
    ID_curso = ""
    nomeCurso = ""

class Curso_materia(db.Model):
    ID_relacionamento = ""
    curso = ""
    materia = ""

class Turmas(db.Model):
    ID_turma = "" 
    nomeTurma = ""
    dataCriacao = ""
    turno = ""   
    periodo = ""

class Curso_turma(db.Model):
    ID_relacionamento = ""
    curso = ""
    turma = ""

class Alunos(db.Model):
    matricula = ""
    nome = "" 
    nomeSocial = ""
    aniversario = ""  
    liderTurma = ""
    senhaSistema = ""
    turma = ""

class Informativos(db.Model):
    ID_informativo = ""
    assunto = ""  
    mensagem = "" 
    dataCriacao = ""

class Turma_informativo(db.Model):
    ID_relacionamento = ""
    turma = ""
    informativo = ""

class Dados_eventos(db.Model):
    ID_eventos = ""
    nomeEvento = "" 
    data_InicioEvento = ""
    data_FinalEvento = ""
    hora_InicioEvento = ""
    hora_FinalEvento = ""
    informativo = ""

class Dados_avaliacoes(db.Model):
    ID_avaliacao = ""
    tipoAvaliacao = ""
    assuntoAvaliacao = ""
    dataAvaliacao = ""
    informativo = ""
    materia = ""

class Dados_materiais(db.Model):
    ID_material = ""
    assuntoMaterial = "" 
    materia = ""
    informativo = ""

class Arquivos(db.Model):
    ID_arquivo = "" 
    tipoArquivo = ""
    dataRegistro = ""
    arquivo = ""

class Informativo_arquivo(db.Model):
    ID_relacionamento = ""  
    informativo = ""
    arquivo = ""