from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.Create import criaInformativo
from CRUD.Read import exibiInformativo
from dados.lista_informativos import lista_id_informativos, lista_informativos
from dados.validadeLogin import validadeLogin
from dados.funcoesData import return_DataAtual
from dados.lista_alunos import lista_alunos
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a" 

usuario = "root"
senha = ""
banco = ""

#Configuração BD
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{usuario}:{senha}@localhost:3306/{banco}' #Porta padrão do SQL é 3306
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#VER PORQUE SO FUNCIONA A CONEXÃO NO PC LOCAL
db = SQLAlchemy(app) #Objeto da conexão

#Ao criar a classe, der o nome da tabela
class Autor(db.Model):
    ID_autor = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)

@app.route("/")
def loginRedirect():
    return redirect(url_for("login"))

@app.route("/rotaTESTE")
def teste():
    autores = Autor.query.all()
    
    lista_autores = []
    #Converte o objeto da table para um dicionario
    for autor in autores:
        autor_dict = {
            'ID_autor': autor.ID_autor,
            'nome': autor.nome
        }
        lista_autores.append(autor_dict)

    return jsonify(lista_autores)


@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

@app.route("/turmas/<int:ID_turma>")
def returnTurma(ID_turma):
    if "ID_turma" not in session or session["ID_turma"] != ID_turma:
        print("MENSAGEM SERVIDOR: Turma não encontrada - 404")
        return "Turma não encontrada - 404"
    
    turma = []
    for aluno in lista_alunos:
        if aluno["ID_turma"] == ID_turma:
            turma.append(aluno)

    return jsonify(turma)

@app.route("/usuarios")
def returnUSUARIOS():
    return jsonify(lista_alunos)

@app.route("/usuarios/<string:matricula>")
def returnUSUARIO(matricula):
    if 'matricula' not in session or session['matricula'] != matricula:
        return redirect(url_for("login"))
    
    if session["status"] == "aluno":
        return render_template("tela_comun.html", nome = session["nomeUsuario"])
    
    elif session["status"] == "aluno-lider":
        return render_template("tela_lideres.html", nome = session["nomeUsuario"])

@app.route("/submit_login", methods=["POST"])
def valida_login():
    if request.method == "POST":
        #ANALISAR PROBLEMA DE LOGIN DEPOIS DO LOGOUT
        matricula = request.form["matricula"]
        senha = request.form["senha"]

        login = validadeLogin(lista_alunos, matricula, senha)

        if login == "invalido":
            return render_template("login.html")  
        else:
            session["matricula"] = login["matricula"] # <-- Armazenados na sessão
            session["nomeUsuario"] = login["nome"]
            session["status"] = login["status"]
            session["ID_turma"]  = login["ID_turma"]

            return redirect(f'usuarios/{session["matricula"]}')
            
    return redirect(url_for("/"))

@app.route("/informativos")
def returnTodosInformativos():
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    listaInformativos = []
    for iten in lista_informativos:
        if iten["ID_turma"] == session["ID_turma"]:
            listaInformativos.append(iten)
    return jsonify(listaInformativos)

@app.route("/informativos/<string:assunto>")
def returnInformativos(assunto):
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})

    listaInformativo = exibiInformativo(assunto, lista_informativos, session["ID_turma"])
    return jsonify(listaInformativo)

#CRIAR ROTAS E PARA OS OUTROS TIPOS DE REQUISIÇÃO (PUT E DELETE)
@app.route("/submit_informativo", methods=["POST", "DELETE", "PUT"])
def CRUD_informativo():
    if "ID_turma" not in session:
        print("MENSAGEM SERVIDOR: Erro na criação de informativo")
        return {"mensagemServidor":"Erro na criação de informativo"}
    
    dadosPOST = request.json

    match request.method:
        case "POST":
            objetoInformativo = {}
            assuntoInformativo =  dadosPOST["assunto"]
            if assuntoInformativo == "":
                assuntoInformativo = "Sem assunto"

            match assuntoInformativo:
                case "Avaliação":
                    objetoInformativo["materia"] = dadosPOST["materia"]
                    objetoInformativo["assunto"] = dadosPOST["assunto"]
                    objetoInformativo["assuntoAvaliacao"] = dadosPOST["assuntoAvaliacao"]
                    objetoInformativo["tipoAvaliacao"] = dadosPOST["tipoAvaliacao"]
                    objetoInformativo["dataAvaliacao"] = dadosPOST["dataAvaliacao"] 
                    objetoInformativo["horaAvaliacao"] = dadosPOST["horaAvaliacao"]
                    objetoInformativo["mensagem"] = dadosPOST["mensagem"]
                    objetoInformativo["anexo"] = dadosPOST["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("DD/MM/AAAA")
                    objetoInformativo["horaInformativo"] = return_DataAtual("HH:MM")

                case "Evento":
                    objetoInformativo["assunto"] = dadosPOST["assunto"]
                    objetoInformativo["nomeEvento"] = dadosPOST["nomeEvento"]
                    objetoInformativo["dataInicial_Evento"] = dadosPOST["dataInicial_Evento"] 
                    objetoInformativo["horaInicial_Evento"] = dadosPOST["horaInicial_Evento"]
                    objetoInformativo["dataFinal_Evento"] = dadosPOST["dataFinal_Evento"]
                    objetoInformativo["horaFinal_Evento"] = dadosPOST["horaFinal_Evento"]
                    objetoInformativo["mensagem"] = dadosPOST["mensagem"]
                    objetoInformativo["anexo"] = dadosPOST["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("DD/MM/AAAA")
                    objetoInformativo["horaInformativo"] = return_DataAtual("HH:MM")

                case "Material Didatico":
                    objetoInformativo["assunto"] = dadosPOST["assunto"]
                    objetoInformativo["materia"] = dadosPOST["materia"]
                    objetoInformativo["assuntoMaterial"] = dadosPOST["assunto"]
                    objetoInformativo["mensagem"] = dadosPOST["mensagem"]
                    objetoInformativo["anexo"] = dadosPOST["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("DD/MM/AAAA")
                    objetoInformativo["horaInformativo"] = return_DataAtual("HH:MM")

                case _:
                    objetoInformativo["assunto"] = dadosPOST["assunto"]
                    objetoInformativo["anexo"] = dadosPOST["anexo"]
                    objetoInformativo["mensagem"] = dadosPOST["mensagem"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("DD/MM/AAAA")
                    objetoInformativo["horaInformativo"] = return_DataAtual("HH:MM")

            criaInformativo(session["ID_turma"], lista_id_informativos, lista_informativos, assuntoInformativo, objetoInformativo)
        
            return redirect(f"/usuarios/{session['matricula']}")

        case "DELETE":
            return "olá mundo"
        
        case "PUT":
            return "olá mundo"
        
    return redirect(f"/usuarios/{session['ID_turma']}")

if __name__ == "__main__":
    app.run(debug=True)
