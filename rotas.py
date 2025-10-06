from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.CRUD_turmas import GET_turma
from CRUD.CRUD_usuarios import GET_usuarios, GET_usuario
from CRUD.CRUD_informativos import GET_informartivos
from dados.funcoesData import return_DataAtual
from modelos import *
from config import app

@app.route("/")
def loginRedirect():
    return redirect(url_for("login"))

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
    
    turma = GET_turma(Turmas, session["ID_turma"])
    return jsonify(turma)

@app.route("/usuarios/<string:tipoUsuario>")
def returnUSUARIOS(tipoUsuario):
    lista_tipoUsuario = GET_usuarios(tipoUsuario, Alunos, Professores)
    return jsonify(lista_tipoUsuario)

@app.route("/usuarios/<string:tipoUsuario>/<string:matricula>")
def returnUSUARIO(tipoUsuario, matricula):
    if 'matricula' not in session or session['matricula'] != matricula:
        return redirect(url_for("login"))
    
    match tipoUsuario:
        case "aluno":
            if session["liderTurma"] == "False":
                return render_template("tela_comun.html", nome = session["nomeUsuario"])
            elif session["liderTurma"] == "True":
                return render_template("tela_lideres.html", nome = session["nomeUsuario"])
        case "professor":
            return render_template("tela_lideres.html", nome = session["nomeUsuario"])

@app.route("/submit_login", methods=["POST"])
def valida_login():
    if request.method == "POST":
        #ANALISAR COMO FAZER O LOGIN DE PROFESSORES
        matricula = request.form["matricula"]
        senha = request.form["senha"]
        
        usuario = GET_usuario(Alunos, Professores, session, matricula)
        
        if usuario.senhaSistema != senha:
            return render_template("login.html")  
        else:
            if session["tipoUsuario"] == "professor":
                session["matricula"] = usuario.matricula # <-- Armazenados na sessão
                session["nomeUsuario"] = usuario.nome
                return redirect(f'usuarios/{session["tipoUsuario"]}/{session["matricula"]}')
            
            elif session["tipoUsuario"] == "aluno":
                session["matricula"] = usuario.matricula # <-- Armazenados na sessão
                session["nomeUsuario"] = usuario.nome
                session["liderTurma"] = usuario.liderTurma
                session["ID_turma"]  = usuario.turma
                return redirect(f'usuarios/{session["tipoUsuario"]}/{session["matricula"]}')
            
    return redirect(url_for("/"))

@app.route("/informativos/")
def returnTodosInformativos():
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    listaInformativo = GET_informartivos(Informativos, Turma_informativo, session["ID_turma"], Dados_avaliacoes, Dados_eventos, Dados_materiais, Materias)

    #listaInformativo = "ola"
    print(listaInformativo)
    return jsonify(listaInformativo)

@app.route("/informativos/<string:assunto>")
def returnInformativos(assunto):
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})

    #listaInformativo = exibiInformativo(assunto, lista_informativos, session["ID_turma"])
    listaInformativo = {"ola":assunto}
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

            #criaInformativo(session["ID_turma"], lista_id_informativos, lista_informativos, assuntoInformativo, objetoInformativo)
        
            return redirect(f"/usuarios/{session['matricula']}")

        case "DELETE":
            return "olá mundo"
        
        case "PUT":
            return "olá mundo"
        
    return redirect(f"/usuarios/{session['ID_turma']}")
    
if __name__ == '__main__':
    app.run(debug=True)