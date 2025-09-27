from app  import db
from sqlalchemy import Enum

#Ao criar a classe, der o nome da tabela
class Professores(db.Model):
    matricula = db.Column(db.String(20), primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    nomeSocial = db.Column(db.String(100), nullable=False)
    aniversario = db.Column(db.Date, nullable=False)
    senhaSistema = db.Column(db.String(8), nullable=False)

class Materias(db.Model):
    ID_materia = db.Column(db.Integer, primary_key=True)
    nomeMateria = db.Column(db.String(100), nullable=False)

class Professor_materia(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    professor = db.Column(db.String(20), db.ForeignKey('professores.matricula'), nullable=False)
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)

class Cursos(db.Model):
    ID_curso = db.Column(db.Integer, primary_key=True)
    nomeCurso = db.Column(db.String(100), nullable=False)

class Curso_materia(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    curso = db.Column(db.Integer, db.ForeignKey('cursos.ID_curso'), nullable=False)
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)

class Turmas(db.Model):
    ID_turma = db.Column(db.Integer, primary_key=True)
    nomeTurma = db.Column(db.String(100), nullable=False)
    dataCriacao = db.Column(db.Date, default=db.func.now())
    turno = db.Column(Enum("Matutino","Vespertino"), nullable=False)
    periodo = db.Column(Enum("1","2","3","4"), default='1')

class Curso_turma(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    curso = db.Column(db.Integer, db.ForeignKey('cursos.ID_curso'), nullable=False)
    turma = db.Column(db.Integer, db.ForeignKey('turmas.ID_turma'), nullable=False)

class Alunos(db.Model):
    matricula = db.Column(db.String(20), primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    nomeSocial = db.Column(db.String(100), nullable=False)
    aniversario = db.Column(db.Date, nullable=False)  
    liderTurma = db.Column(Enum("True","False"), default="False")
    senhaSistema = db.Column(db.String(8), nullable=False)
    turma = db.Column(db.Integer, db.ForeignKey('turmas.ID_turma'), nullable=False)

class Informativos(db.Model):
    ID_informativo = db.Column(db.Integer, primary_key=True)
    assunto = db.Column(db.String(100), default="Sem assunto")  
    mensagem = db.Column(db.Text, nullable=False)
    dataCriacao = db.Column(db.DateTime, default=db.func.now())

class Turma_informativo(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    turma = db.Column(db.Integer, db.ForeignKey('turmas.ID_turma'), nullable=False)
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)

class Dados_eventos(db.Model):
    ID_eventos = db.Column(db.Integer, primary_key=True)
    nomeEvento = db.Column(db.String(100), nullable=False) 
    data_InicioEvento = db.Column(db.Date, nullable=False)
    data_FinalEvento = db.Column(db.Date, nullable=False)
    hora_InicioEvento = db.Column(db.Time, nullable=False)
    hora_FinalEvento = db.Column(db.Time, nullable=False)
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)

class Dados_avaliacoes(db.Model):
    ID_avaliacao = db.Column(db.Integer, primary_key=True)
    tipoAvaliacao = db.Column(db.String(100), nullable=False) 
    assuntoAvaliacao = db.Column(db.String(100), nullable=False) 
    dataAvaliacao = db.Column(db.DateTime, nullable=False)
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)

class Dados_materiais(db.Model):
    ID_material = db.Column(db.Integer, primary_key=True)
    assuntoMaterial = db.Column(db.String(100), nullable=False) 
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)

class Arquivos(db.Model):
    ID_arquivo = db.Column(db.Integer, primary_key=True)
    tipoArquivo = db.Column(Enum("Arquivo", "Link"), default="Arquivo")
    dataRegistro = db.Column(db.DateTime, default=db.func.now())
    arquivo = db.Column(db.Text, nullable=False) 

class Informativo_arquivo(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)  
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)
    arquivo = db.Column(db.Integer, db.ForeignKey('arquivos.ID_arquivo'), nullable=False)