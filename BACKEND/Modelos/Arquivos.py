from App import db
from sqlalchemy import Enum

class Arquivos(db.Model):
    ID_arquivo = db.Column(db.Integer, primary_key=True)
    tipoArquivo = db.Column(Enum("Arquivo", "Link"), default="Arquivo")
    dataRegistro = db.Column(db.DateTime, default=db.func.now())
    arquivo = db.Column(db.Text, nullable=False) 

class Informativo_arquivo(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)  
    informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)
    arquivo = db.Column(db.Integer, db.ForeignKey('arquivos.ID_arquivo'), nullable=False)