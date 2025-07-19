from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session
from CRUD.Create import *
from CRUD.Read import *
from dados.lista_informativos import lista_id_informativos
from CRUD.validadeLogin import validadeLogin
from dados.lista_turmas import lista_turmas

app = Flask(__name__)
app.secret_key = "b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a" 

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/usuario-comun")
def tela_comun():
    exibi_avisos = exibiAviso("aviso", lista_turmas)
    exibi_avaliacoes = exibiAviso("avaliacao", lista_turmas)
    exibi_material = exibiAviso("material", lista_turmas)
    exibi_evento = exibiAviso("evento", lista_turmas)
    return render_template("tela_comun.html", aviso = exibi_avisos, avaliacao = exibi_avaliacoes, material = exibi_material, evento = exibi_evento)

@app.route("/usuario-lider")
def tela_lider():
    exibi_avisos = exibiAviso("aviso", lista_turmas)
    exibi_avaliacoes = exibiAviso("avaliacao", lista_turmas)
    exibi_material = exibiAviso("material", lista_turmas)
    exibi_evento = exibiAviso("evento", lista_turmas)
    #return [exibi_avisos, exibi_avaliacoes, exibi_evento, exibi_material]
    return render_template("tela_lideres.html", aviso = exibi_avisos, avaliacao = exibi_avaliacoes, material = exibi_material, evento = exibi_evento)
   
@app.route("/submit_login", methods=["POST"])
def valida_login():
    if request.method == "POST":
        matricula = request.form["matricula"]
        senha = request.form["senha"]

        login = validadeLogin(lista_turmas, matricula, senha)
      
        if login[0]["status"] == "aluno-lider":
            return redirect("/usuario-lider")
            #return login
        
        elif login[0]["status"] == "aluno":
            return redirect("/usuario-comun")
            #return login
        
        elif login == "invalido":
            return render_template("login.html")  
    return redirect(url_for("/"))

@app.route("/form_avisos")
def form_avisos():
    return render_template("form_avisos.html")

@app.route("/submit_aviso", methods=["POST, DELETE, PUT"])
def cria_aviso():
    if request.method == "POST":
        tipo_aviso = request.form["tipo_aviso"]
        if tipo_aviso == "aviso":
            assunto = request.form["assunto_aviso"]
            texto = request.form["texto"]

            data_atual = returnData()
            hora_atual = returnHora()

            criaAviso(lista_id_informativos, data_atual, hora_atual, assunto, texto)
       
        elif tipo_aviso == "avaliacao":
            materia = request.form["materia"]
            assunto = request.form["assunto"]
            data_avaliacao = request.form["data"] #Ajusta data para modelo brasileiro.
            hora_avaliacao = request.form["hora"]
            descricao = request.form["descricao"]

            criaAvaliacao(lista_id_informativos, materia, assunto, data_avaliacao, hora_avaliacao, descricao)

        elif tipo_aviso == "evento":
            nome_evento = request.form["nome"]
            data_evento = request.form["data"] #Ajusta data para modelo brasileiro.
            hora_evento = request.form["hora"]
            descricao = request.form["descricao"]

            criaEvento(lista_id_informativos, nome_evento, data_evento, hora_evento, descricao)

        elif tipo_aviso == "material":
            tipo_material = request.form["tipo_material"]
            material = request.form["material"]
            materia = request.form["materia"]
            assunto = request.form["assunto"]
            descricao = request.form["descricao"]

            criaMaterial(lista_id_informativos, tipo_material, material, materia, assunto, descricao)
        #Criar uma função de exibição destinada a avaliações

        if request.method == "DELETE":
            return "olá mundo"
        
        if request.method == "PUT":
            return "olá mundo"
        
        return redirect("/usuario-lider")
    return redirect(url_for("/usuario/form_avisos"))


if __name__ == "__main__":
    app.run(debug=True)
