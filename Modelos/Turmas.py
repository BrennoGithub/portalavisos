from config import db
from sqlalchemy import Enum

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