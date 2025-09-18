# Conexão com o Banco de Dados Mysql 
A conexão com o Banco de dados e criação de tabelas é feita no backend utilizando o Flask.


## Instalação do conector do MySQL e SQLAlchemy
pip install Flask-SQLAlchemy PyMySQL

## Instalação do Flask Migrate
pip install Flask-Migrate

## Importar flask MySQL
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

## Importar Flask Migrate (para alterar tabelas)
from flask_migrate inport Migrate
from models import db 

migrate = Migrate(app, db)

## Configuração do banco MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://usuario:senha@localhost/meubanco'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


## Criar uma tabela em models.py
from app import db

class usuarios(db.Model):
    nome = db.Column(db.String(50), nullable=False)
    matricula = db.Column(db.Integer, primary_key=True)

    def to_dict(self):
        return {"nome": self.nome, "matricula": self.matricula}

## No terminal:
from app import db
from models import usuario
db.create_all()

## Alterar uma tabela em models.py: 

## 1-terminal:
flask db init

## 2-No models.py
Fazer a modificação que deseja
flask db -m "nome da mudança"

## 3-Aplicar a mudança
flask db upgrade


## Implementar CRUD

from models import Usuario, db

--> Criar (Create)

@app.route("/usuarios", methods=["POST"])
def criar_usuario():
    data = request.json
    novo = Usuario(nome=data["nome"], email=data["email"])
    db.session.add(novo)
    db.session.commit()
    return jsonify(novo.to_dict()), 201

--> Listar (Read)

@app.route("/usuarios", methods=["GET"])
def listar_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([u.to_dict() for u in usuarios])

--> Atualizar (Update)

@app.route("/usuarios/<int:id>", methods=["PUT"])
def atualizar_usuario(id):
    usuario = Usuario.query.get_or_404(id)
    data = request.json
    usuario.nome = data.get("nome", usuario.nome)
    usuario.email = data.get("email", usuario.email)
    db.session.commit()
    return jsonify(usuario.to_dict())

--> Deletar (Delete)

@app.route("/usuarios/<int:id>", methods=["DELETE"])
def deletar_usuario(id):
    usuario = Usuario.query.get_or_404(id)
    db.session.delete(usuario)
    db.session.commit()
    return jsonify({"message": "Usuário deletado com sucesso"})


## Criar usuário:
curl -X POST http://127.0.0.1:5000/usuarios -H "Content-Type: application/json" -d '{"nome": "Breno", "email": "breno@email.com"}'

## Listar usuários:
curl http://127.0.0.1:5000/usuarios

## Atualizar usuários:
curl -X PUT http://127.0.0.1:5000/usuarios/1 -H "Content-Type: application/json" -d '{"nome": "Breno Atualizado"}'

## Deletar usuários:
curl -X DELETE http://127.0.0.1:5000/usuarios/1