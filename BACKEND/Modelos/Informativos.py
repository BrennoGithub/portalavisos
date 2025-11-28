from BACKEND.App import db
from sqlalchemy import Enum

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