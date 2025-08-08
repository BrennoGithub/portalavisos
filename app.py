from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.Create import criaInformativo, returnData, returnHora
from CRUD.Read import exibiInformativo
from dados.lista_informativos import lista_id_informativos, lista_informativos
from dados.validadeLogin import validadeLogin
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

    #usuario = {}
    #for alunos in lista_alunos:
    #    if matricula == alunos["matricula"]:
    #        usuario = alunos
    #return jsonify(usuario)

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



@app.route("/informativos/<string:tipo>")
def returnInformativos(tipo):
    if not 'ID_turma' in session:
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    ID_turma = session["ID_turma"]

    if tipo in ["avisos", "avaliacoes", "materiais", "eventos"]:
        listaInformativo = exibiInformativo(tipo, lista_informativos, ID_turma)
        return listaInformativo

@app.route("/form_avisos")
def form_avisos():
    return render_template("form_avisos.html")

@app.route("/submit_informativo", methods=["POST", "DELETE", "PUT"])
def CRUD_informativo():
    if "ID_turma" not in session:
        return redirect(url_for("form_avisos"))
    ID_turma = session["ID_turma"]

    if request.method == "POST":
        objetoInformativo = {}
        tipoInformativo = request.form["tipo_aviso"]
        if tipoInformativo == "avisos":
            objetoInformativo["assunto"] = request.form["assunto_aviso"]
            objetoInformativo["texto"] = request.form["texto"]
            objetoInformativo["data_atual"] = returnData()
            objetoInformativo["hora_atual"] = returnHora()
       
        elif tipoInformativo == "avaliacoes":
            objetoInformativo["materia"] = request.form["materia"]
            objetoInformativo["assunto"] = request.form["assunto"]
            objetoInformativo["data_avaliacao"] = request.form["data"] #Ajusta data para modelo brasileiro.
            objetoInformativo["hora_avaliacao"] = request.form["hora"]
            objetoInformativo["descricao"] = request.form["descricao"]

        elif tipoInformativo == "eventos":
            objetoInformativo["nome_evento"] = request.form["nome"]
            objetoInformativo["data_evento"] = request.form["data"] #Ajusta data para modelo brasileiro.
            objetoInformativo["hora_evento"] = request.form["hora"]
            objetoInformativo["descricao"] = request.form["descricao"]

        elif tipoInformativo == "materiais":
            objetoInformativo["tipo_material"] = request.form["tipo_material"]
            objetoInformativo["material"] = request.form["material"]
            objetoInformativo["materia"] = request.form["materia"]
            objetoInformativo["assunto"] = request.form["assunto"]
            objetoInformativo["descricao"] = request.form["descricao"]

        criaInformativo(ID_turma, lista_id_informativos[tipoInformativo], lista_informativos[tipoInformativo], tipoInformativo, objetoInformativo)
        #Criar uma função de exibição destinada a avaliações
        
        return redirect(url_for(f"usuarios/{session['matricula']}"))

    elif request.method == "DELETE":
        return "olá mundo"
        
    elif request.method == "PUT":
        return "olá mundo"
    return redirect(url_for("form_avisos"))


if __name__ == "__main__":
    app.run(debug=True)
