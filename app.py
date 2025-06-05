from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/comun')
def inicial_comun():
    return render_template('tela_comun.html')

@app.route('/lideres')
def inicial_lideres():
    return render_template('tela_lideres.html') 

@app.route('/formulario_de_avisos')
def form_avisos():
    return render_template('form_avisos.html') 

if __name__ == '__main__':
    app.run(debug=True)
