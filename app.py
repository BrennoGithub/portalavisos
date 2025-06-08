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
    return render_template('tela_lideres.html', aviso = lista_avisos) 

@app.route('/lideres/form_avisos')
def form_avisos():
    return render_template('form_avisos.html')

@app.route('/submit', methods=['POST'])
def cria_aviso():
    if request.method == 'POST':
        id = 1
        if id in lista_id_avisos:
            id += 1

        tipo_aviso = request.form['tipo_aviso']
        assunto = request.form['assunto_aviso']
        texto = request.form['texto']

        lista_id_avisos.append(id)
        lista_avisos.append({
            'ID': id,
            'tipo_aviso': tipo_aviso,
            'assunto_aviso': assunto,
            'texto': texto
        })
    
        return render_template('tela_lideres.html', aviso = lista_avisos)
    return redirect(url_for('/lideres/form_avisos'))


if __name__ == '__main__':
    app.run(debug=True)
