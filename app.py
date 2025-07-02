from flask import Flask
from flask import render_template, request, redirect, url_for
from flask import session
from dados.funcoes_avisos import *
from dados.lista_informativos import *
from dados.validadeLogin import *
from dados.lista_turmas import lista_turmas

app = Flask(__name__)
app.secret_key = 'b48297f927dbf1a7c8e0e927927dbf1db48297f4a7c8e0e927dbf1d3e9b56c1abf1d3e9b56c1a' 

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')  

@app.route('/submit_login', methods=['POST'])
def valida_login():
    if request.method == 'POST':
        matricula = request.form['matricula']
        senha = request.form['senha']

        login = validadeLogin(lista_turmas, matricula, senha)
        print(login)
        if login[1] == 'aluno-lider':
            exibi_avisos = exibiAviso('aviso', lista_turmas)
            exibi_avaliacoes = exibiAviso('avaliacao', lista_turmas)
            exibi_material = exibiAviso('material', lista_turmas)
            exibi_evento = exibiAviso('evento', lista_turmas)
            return render_template('tela_lideres.html', aviso = exibi_avisos, avaliacao = exibi_avaliacoes, material = exibi_material, evento = exibi_evento)
        
        elif login[1] == 'aluno':
            exibi_avisos = exibiAviso('aviso', lista_informativos)
            exibi_avaliacoes = exibiAviso('avaliacao', lista_informativos)
            exibi_material = exibiAviso('material', lista_informativos)
            exibi_evento = exibiAviso('evento', lista_informativos)
            return render_template('tela_comun.html', aviso = exibi_avisos, avaliacao = exibi_avaliacoes, material = exibi_material, evento = exibi_evento)
        
        elif login == 'invalido':
            return render_template('login.html')  
    return redirect(url_for('/'))

@app.route('/usuario/form_avisos')
def form_avisos():
    return render_template('form_avisos.html')

@app.route('/submit_aviso', methods=['POST'])
def cria_aviso():
    if request.method == 'POST':
        tipo_aviso = request.form['tipo_aviso']
        assunto = request.form['assunto_aviso']
        texto = request.form['texto']

        data_atual = returnData()
        hora_atual = returnHora()

        criaAviso(lista_id_informativos, lista_informativos, data_atual, hora_atual, tipo_aviso, assunto, texto)
    
        exibi_avisos = exibiAviso('aviso', lista_informativos)
        exibi_avaliacoes = exibiAviso('avaliacao', lista_informativos)
        exibi_material = exibiAviso('material', lista_informativos)
        exibi_evento = exibiAviso('evento', lista_informativos)

        return render_template('tela_lideres.html', aviso = exibi_avisos, avaliacao = exibi_avaliacoes, material = exibi_material, evento = exibi_evento)
    return redirect(url_for('/usuario/form_avisos'))

if __name__ == '__main__':
    app.run(debug=True)
