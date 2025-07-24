from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session
from CRUD.Create import *
from CRUD.Read import *
from dados.lista_informativos import lista_id_informativos, lista_informativos
from dados.validadeLogin import validadeLogin
from dados.lista_alunos import lista_alunos

app = Flask(__name__)
app.secret_key = "b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a" 

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/usuarios/<matricula>")
def tela_principal(matricula):
    usuario = {}
    for item in lista_alunos:
        if item["matricula"] == matricula:
            usuario = item

    listaAvisos = exibiInformativo("avisos", lista_informativos, usuario["ID_turma"])
    listaAvaliacoes = exibiInformativo("avaliacoes", lista_informativos, usuario["ID_turma"])
    listaMateriais = exibiInformativo("materiais", lista_informativos, usuario["ID_turma"])
    listaEventos = exibiInformativo("eventos", lista_informativos, usuario["ID_turma"])

    if usuario["status"] == "aluno":
        return render_template("tela_comun.html", aviso = listaAvisos, avaliacao = listaAvaliacoes, material = listaMateriais, evento = listaEventos, nome=usuario["nome"])
    
    if usuario["status"] == "aluno-lider":
        return render_template("tela_lideres.html", aviso = listaAvisos, avaliacao = listaAvaliacoes, material = listaMateriais, evento = listaEventos, nome=usuario["nome"])

   
@app.route("/submit_login", methods=["POST"])
def valida_login():
    if request.method == "POST":
        matricula = request.form["matricula"]
        senha = request.form["senha"]

        login = validadeLogin(lista_alunos, matricula, senha)

        if login == "invalido":
            return render_template("login.html")  
      
        else:
            matricula = login["matricula"]
            return redirect(f"/usuarios/{matricula}")
          
    return redirect(url_for("/"))

@app.route("/form_avisos")
def form_avisos():
    return render_template("form_avisos.html")

@app.route("/submit_aviso", methods=["POST, DELETE, PUT"])
def CRUD_informativo():
    if request.method == "POST":
        tipo_aviso = request.form["tipo_aviso"]
        if tipo_aviso == "aviso":
            assunto = request.form["assunto_aviso"]
            texto = request.form["texto"]

            data_atual = returnData()
            hora_atual = returnHora()

            criaAviso(lista_id_informativos, lista_informativos, data_atual, hora_atual, assunto, texto)
       
        elif tipo_aviso == "avaliacao":
            materia = request.form["materia"]
            assunto = request.form["assunto"]
            data_avaliacao = request.form["data"] #Ajusta data para modelo brasileiro.
            hora_avaliacao = request.form["hora"]
            descricao = request.form["descricao"]

            criaAvaliacao(lista_id_informativos, lista_informativos, materia, assunto, data_avaliacao, hora_avaliacao, descricao)

        elif tipo_aviso == "evento":
            nome_evento = request.form["nome"]
            data_evento = request.form["data"] #Ajusta data para modelo brasileiro.
            hora_evento = request.form["hora"]
            descricao = request.form["descricao"]

            criaEvento(lista_id_informativos, lista_informativos, nome_evento, data_evento, hora_evento, descricao)

        elif tipo_aviso == "material":
            tipo_material = request.form["tipo_material"]
            material = request.form["material"]
            materia = request.form["materia"]
            assunto = request.form["assunto"]
            descricao = request.form["descricao"]

            criaMaterial(lista_id_informativos, lista_informativos, tipo_material, material, materia, assunto, descricao)
        #Criar uma função de exibição destinada a avaliações

        if request.method == "DELETE":
            return "olá mundo"
        
        if request.method == "PUT":
            return "olá mundo"
        
        return redirect("/usuario")
    return redirect(url_for("/usuario/form_avisos"))


if __name__ == "__main__":
    app.run(debug=True)
