from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.Create import criaInformativo
from CRUD.Read import exibiInformativo
from dados.lista_informativos import lista_id_informativos, lista_informativos
from dados.validadeLogin import validadeLogin
from dados.funcoesData import return_DataAtual
from dados.lista_alunos import lista_alunos

#VER E ALTERAR URL_FOR PARA CORRIGIR ERROS.

app = Flask(__name__)
app.secret_key = "b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a" 

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


@app.route("/informativos/<string:assunto>")
def returnInformativos(assunto):
    if not 'ID_turma' in session:
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})

    if assunto == "todos":
        return jsonify(lista_informativos)
    else:
        listaInformativo = exibiInformativo(assunto, lista_informativos, session["ID_turma"])
        return jsonify(listaInformativo)


@app.route("/form_avisos")
def form_avisos():
    return render_template("form_avisos.html", nome=session["nomeUsuario"])

@app.route("/submit_informativo", methods=["POST", "DELETE", "PUT"])
def CRUD_informativo():
    if "ID_turma" not in session:
        return redirect(url_for("form_avisos"))

    match request.method:
        case "POST":
            objetoInformativo = {}
            assuntoInformativo = request.form["assunto"]
            if assuntoInformativo == "":
                assuntoInformativo = "Sem assunto"

            match assuntoInformativo:
                case "Avaliação":
                    objetoInformativo["materia"] = request.form["materia"]
                    objetoInformativo["assunto"] = request.form["assunto"]
                    objetoInformativo["assuntoAvaliacao"] = request.form["assuntoAvaliacao"]
                    objetoInformativo["tipoAvaliacao"] = request.form["tipoAvaliacao"]
                    objetoInformativo["dataAvaliacao"] = request.form["dataAvaliacao"] #Ajusta data para modelo brasileiro.
                    objetoInformativo["horaAvaliacao"] = request.form["horaAvaliacao"]
                    objetoInformativo["mensagem"] = request.form["mensagem"]
                    objetoInformativo["anexo"] = request.form["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("Dia")
                    objetoInformativo["horaInformativo"] = return_DataAtual("Hora")

                case "Evento":
                    objetoInformativo["assunto"] = request.form["assunto"]
                    objetoInformativo["nomeEvento"] = request.form["nomeEvento"]
                    objetoInformativo["dataInicial_Evento"] = request.form["dataInicial_Evento"] #Ajusta data para modelo brasileiro.
                    objetoInformativo["horaInicial_Evento"] = request.form["horaInicial_Evento"]
                    objetoInformativo["dataFinal_Evento"] = request.form["dataFinal_Evento"] #Ajusta data para modelo brasileiro.
                    objetoInformativo["horaFinal_Evento"] = request.form["horaFinal_Evento"]
                    objetoInformativo["mensagem"] = request.form["mensagem"]
                    objetoInformativo["anexo"] = request.form["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("Dia")
                    objetoInformativo["horaInformativo"] = return_DataAtual("Hora")

                case "Material Didatico":
                    objetoInformativo["assunto"] = request.form["assunto"]
                    objetoInformativo["materia"] = request.form["materia"]
                    objetoInformativo["assuntoMaterial"] = request.form["assunto"]
                    objetoInformativo["mensagem"] = request.form["mensagem"]
                    objetoInformativo["anexo"] = request.form["anexo"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("Dia")
                    objetoInformativo["horaInformativo"] = return_DataAtual("Hora")

                case _:
                    objetoInformativo["assunto"] = request.form["assunto"]
                    objetoInformativo["anexo"] = request.form["anexo"]
                    objetoInformativo["mensagem"] = request.form["mensagem"]
                    objetoInformativo["dataInformativo"] = return_DataAtual("Dia")
                    objetoInformativo["horaInformativo"] = return_DataAtual("Hora")

            criaInformativo(session["ID_turma"], lista_id_informativos, lista_informativos, assuntoInformativo, objetoInformativo)
            #Criar uma função de exibição destinada a avaliações
        
            return redirect(f"/usuarios/{session['matricula']}")

        case "DELETE":
            return "olá mundo"
        
        case "PUT":
            return "olá mundo"
        
    return redirect(url_for("form_avisos"))

if __name__ == "__main__":
    app.run(debug=True)
