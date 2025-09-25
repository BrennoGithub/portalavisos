from app  import db

#Ao criar a classe, der o nome da tabela
class Autor(db.Model):
    ID_autor = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)