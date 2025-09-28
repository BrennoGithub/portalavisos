from flask import render_template, request, redirect, url_for
from flask import session, jsonify
from CRUD.Create import criaInformativo
from CRUD.Read import exibiInformativo
from dados.lista_informativos import lista_id_informativos, lista_informativos
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
    
    turma = Turmas.query.get_or_404(session["ID_turma"])
    objetoTurma = {
        "ID_turma": turma.ID_turma,
        "nomeTurma": turma.nomeTurma,
        "dataCriacao": turma.dataCriacao,
        "turno": turma.turno,
        "periodo": turma.periodo
    }
    return jsonify(objetoTurma)

@app.route("/usuarios/<string:tipoUsuario>")
def returnUSUARIOS(tipoUsuario):
    match tipoUsuario:
        case "aluno":
            alunos = Alunos.query.all()
            lista_alunos = []
            for iten in alunos:
                objetoAluno = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema,
                    "liderTurma": iten.liderTurma,
                    "turma": iten.turma
                }
                lista_alunos.append(objetoAluno)
            return jsonify(lista_alunos)
        
        case "professor":
            professores = Professores.query.all()
            lista_professores = []
            for iten in professores:
                objetoProfessor = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema
                }
                lista_alunos.append(objetoProfessor)
            return jsonify(lista_professores)

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
        
        usuario = ""
        usuario = Alunos.query.get_or_404(matricula)
        if usuario == None:
            usuario = Professores.query.get_or_404(matricula)
            if usuario == None:
                usuario = "[ Matricula invalida ]"
            else:
                session["tipoUsuario"] = "professor"
        else:
            session["tipoUsuario"] = "aluno"
        print(usuario)
        
        login = ""
        if usuario.senhaSistema != senha:
            login = "invalido"
        else:
            login = usuario.liderTurma

        if login == "invalido":
            return render_template("login.html")  
        else:
            session["matricula"] = usuario.matricula # <-- Armazenados na sessão
            session["nomeUsuario"] = usuario.nome
            session["liderTurma"] = usuario.liderTurma
            session["ID_turma"]  = usuario.turma
            return redirect(f'usuarios/{session["tipoUsuario"]}/{session["matricula"]}')
            
    return redirect(url_for("/"))

@app.route("/informativos")
def returnTodosInformativos():
    if not 'ID_turma' in session:
        print("MENSAGEM SERVIDOR: Sessão expirada ou não autorizado. Faça login novamente.")
        return jsonify({"mensagemServidor": "Sessão expirada ou não autorizado. Faça login novamente."})
    
    #TERMINAR FUNÇÃO DE GET INFORATIVOS E DADOS ADICIONAIS
    informativos = Informativos.query.filter_by(turma=session["ID_turma"])
    lista_informativos = []
    for iten in informativos:
        match iten.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao,
                    "tipoAvaliacao": dadosAdicionais,
                    "assuntoAvaliacao": dadosAdicionais,
                    "dataAvaliacao": dadosAdicionais,
                }
                lista_informativos.append(objetoInformativo)
            case "Evento":
                dadosAdicionais = Dados_eventos.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)
            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)
            case _:
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)
    return jsonify(lista_informativos)

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
    
if __name__ == '__main__':
    app.run(debug=True)