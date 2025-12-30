from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

#CRIAR FUNCIONALIDADE QUE USE OUTRA PORTA QUANDO UMA ESTIVER SENDO USADA.
CORS(app, supports_credentials=True, origins="http://localhost:5173")

app.secret_key = "b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a" 

configuracao = {
        "usuario": "root",
        "senha": "",
        "servidor": "localhost",
        "porta": "3306",
        "banco": "portal_informativo"
    }

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{configuracao["usuario"]}:{configuracao["senha"]}@{configuracao["servidor"]}:{configuracao["porta"]}/{configuracao["banco"]}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

'''
config.py --(app)--> rotas.py
config.py --(db)--> modelos.py
modelos.py --(modelos)--> rotas.py
'''