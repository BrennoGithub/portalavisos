from flask import Flask
from flask import render_template, request, redirect, url_for
from dados import *

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/comun')
def inicial_comun():
    return render_template('tela_comun.html', aviso = lista_avisos)

@app.route('/lideres')
def inicial_lideres():
    return render_template('tela_lideres.html', assunto = 'mundo', texto='ola') 

@app.route('/lideres/form_avisos')
def form_avisos():
    return render_template('form_avisos.html')

@app.route('/submit_aviso', methods=['POST'])
def cria_aviso():
    if request.method == 'POST':
        tipo_aviso = request.form['tipo_aviso']
        assunto = request.form['assunto_aviso']
        texto = request.form['texto']

        criaAviso(lista_avisos, lista_id_avisos, tipo_aviso, assunto, texto)
    
        return render_template('tela_lideres.html', aviso = lista_avisos)
    return redirect(url_for('/lideres/form_avisos'))

@app.route('/submit_login', methods=['POST'])
def valida_login():
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']
        turma = request.form['turma']

        login = validadeLogin(lista_alunos, nome, matricula, turma)
        if login == 'lider':
            return render_template('tela_lideres.html', aviso = lista_avisos)
        elif login == 'comun':
            return render_template('tela_comun.html', aviso = lista_avisos)
        elif login == 'invalido':
            return '<h1>Login Invalido</h1>'    
    return redirect(url_for('/'))

if __name__ == '__main__':
    app.run(debug=True)
