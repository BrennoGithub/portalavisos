# Teste de Criação de Tabela
from app import db

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def to_dict(self):
        return {"id": self.id, "nome": self.nome, "email": self.email}
