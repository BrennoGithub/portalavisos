from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    lista = [
        {'nome': 'ana'},
        {'nome': 'bianca'},
        {'nome': 'carol'},
        {'nome': 'daniela'},
        {'nome': 'erica'}
            ]
   
    texto = ''
    for x in lista:
        texto = texto+f"<h1>Meu nome é {x['nome']}</h1>"

    return texto

@app.route('/inicial')
def inicial():
    return render_template('index.html') 

if __name__ == '__main__':
    app.run(debug=True)
