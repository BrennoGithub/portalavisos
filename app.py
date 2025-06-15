from flask import Flask
from flask import render_template, request, redirect, url_for
from dados import *

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')


@app.route('/submit_login', methods=['POST'])
def valida_login():
    if request.method == 'POST':
        nome = request.form['nome']
        matricula = request.form['matricula']
        turma = request.form['turma']

        login = validadeLogin(lista_alunos, nome, matricula, turma)
        if login == 'lider':
            exibicao = exibiAviso(lista_avisos)
            return render_template('tela_lideres.html', aviso = exibicao)
        
        elif login == 'comun':
            exibicao = exibiAviso(lista_avisos)
            return render_template('tela_comun.html', aviso = exibicao)
        
        elif login == 'invalido':
            return '<h1>Login Invalido</h1>'    
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

        criaAviso(lista_avisos, lista_id_avisos, tipo_aviso, assunto, texto)
    
        exibicao = exibiAviso(lista_avisos)
        return render_template('tela_lideres.html', aviso = exibicao)
    return redirect(url_for('/usuario/form_avisos'))


if __name__ == '__main__':
    app.run(debug=True)
