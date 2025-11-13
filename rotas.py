from config import app
from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.CRUD_turmas import GET_turma
from CRUD.CRUD_usuarios import GET_usuario, GET_usuarios
from CRUD.CRUD_informativos import GET_informartivos, POST_informativo
from CRUD.CRUD_materias import GET_materias

@app.route("/")
def PaginaPrincipal():
    if "matricula" in session and "tipoUsuario" in session:
        return redirect(f'usuarios/{session["tipoUsuario"]}/{session["matricula"]}')
    else:
        return redirect(url_for("login"))

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/submit_login", methods=["POST"])
def valida_login():
    if request.method == "POST":
        matricula = request.form["matricula"]
        senha = request.form["senha"]
        
        usuario = GET_usuario(session, matricula)
        
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

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

@app.route("/turmas/<int:ID_turma>")
def returnTurma(ID_turma):
    if "ID_turma" not in session or session["ID_turma"] != ID_turma:
        print("MENSAGEM SERVIDOR: Turma não encontrada - 404")
        return "Turma não encontrada - 404"
    
    turma = GET_turma(session["ID_turma"])
    return jsonify(turma)

@app.route("/usuarios/<string:tipoUsuario>")
def returnUSUARIOS(tipoUsuario):
    lista_tipoUsuario = GET_usuarios(tipoUsuario)
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


@app.route("/materias/")
def returnMaterias():
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    lista_materias = GET_materias(session["ID_turma"])

    return jsonify(lista_materias)

@app.route("/informativos/")
def returnTodosInformativos():
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    listaInformativo = GET_informartivos(session["ID_turma"])
    print(listaInformativo)

    if len(listaInformativo) == 0 or listaInformativo == None:
        print("MENSAGEM SERVIDOR: Informativos não encontrados")
        return "MENSAGEM SERVIDOR: Informativos não encontrados"
    else:
        return jsonify(listaInformativo)

@app.route("/informativos/<string:assunto>")
def returnInformativos_assunto(assunto):
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})

    listaInformativo = GET_informartivos(session["ID_turma"])

    lista_assunto = []
    for info in listaInformativo:
        match assunto:
            case "avaliacoes":
                if info["assunto"] == "Avaliação":
                    lista_assunto.append(info)
            case "eventos":
                if info["assunto"] == "Evento":
                    lista_assunto.append(info)
            case "materiais":
                if info["assunto"] == "Material Didatico":
                    lista_assunto.append(info)
            case "avisos":
                if info["assunto"] != "Material Didatico" and info["assunto"] != "Avaliação" and info["assunto"] != "Evento":
                    lista_assunto.append(info)


    if len(lista_assunto) == 0:
        print("MENSAGEM SERVIDOR: Informativos não encontrados")
        return "MENSAGEM SERVIDOR: Informativos não encontrados"
    else:
        if assunto == "avaliacoes":
            lista_assunto = sorted(lista_assunto, key=lambda x: x["dataAvaliacao"]) # <-- Organza a lista por dataAvaliacao
        elif assunto == "eventos":
            lista_assunto = sorted(lista_assunto, key=lambda x: x["data_InicioEvento"]) # <-- Organza a lista por data_InicioEvento
        return jsonify(lista_assunto)
    
@app.route("/informativos/<int:ID_informativo>")
def returnInformativo_ID(ID_informativo):
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})

    listaInformativo = GET_informartivos(session["ID_turma"])

    for info in listaInformativo:
        if info["ID_informativo"] == ID_informativo:
            return jsonify(info)
        
#DESENVOLVER OS METODOS PUT, POST, DELETE

@app.route("/POST/informativos", methods=["POST"])
def CREATE_informativo():
    if not "ID_turma" in session:
        print("MENSAGEM SERVIDOR: Erro na criação de informativo")
        return jsonify({"mensagemServidor":"Erro na criação de informativo"})
    
    dadosPOST = request.json
    print(dadosPOST)
    if dadosPOST is None:
        print("MENSAGEM SERVIDOR: Nenhum dado foi encontrado na requisição")
        return jsonify({"mensagemServidor":"Nenhum dado foi encontrado na requisição"})
    else:
        assuntoInformativo =  dadosPOST["assunto"]
        POST_informativo(assuntoInformativo, dadosPOST)
        
    return redirect(url_for(f"/usuarios/{session['matricula']}"))

@app.route("/PUT/informativos/<int:ID_informativo>", methods=["PUT"])
def UPDATE_informativo(ID_informativo):
    if not "ID_turma" in session:
        print("MENSAGEM SERVIDOR: Erro na atualização de informativo")
        return jsonify({"mensagemServidor":"Erro na atualização de informativo"})
    
    #return redirect(f"/usuarios/{session['matricula']}")
    
@app.route("/DELETE/informativos/<int:ID_informativo>", methods=["DELETE"])
def DELETE_informativo(ID_informativo):
    if not "ID_turma" in session:
        print("MENSAGEM SERVIDOR: Erro na exclusão de informativo")
        return jsonify({"mensagemServidor":"Erro na exclusão de informativo"})
    
    #return redirect(f"/usuarios/{session['matricula']}")
    
if __name__ == '__main__':
    app.run(debug=True)