from App import db
from sqlalchemy import Enum

class Professores(db.Model):
    matricula = db.Column(db.String(20), primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    nomeSocial = db.Column(db.String(100), nullable=False)
    aniversario = db.Column(db.Date, nullable=False)
    senhaSistema = db.Column(db.String(8), nullable=False)

class Professor_materia(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    professor = db.Column(db.String(20), db.ForeignKey('professores.matricula'), nullable=False)
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)

class Alunos(db.Model):
    matricula = db.Column(db.String(20), primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    nomeSocial = db.Column(db.String(100), nullable=False)
    aniversario = db.Column(db.Date, nullable=False)  
    liderTurma = db.Column(Enum("True","False"), default="False")
    senhaSistema = db.Column(db.String(8), nullable=False)
    turma = db.Column(db.Integer, db.ForeignKey('turmas.ID_turma'), nullable=False)