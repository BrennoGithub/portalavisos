from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return '''<div id="forms">
<header>
    <h1>Login</h1>
</header>

<form>
    <label for="nome">Aluno </label>
    <input type="text" id="nome" placeholder="Digite seu Nome" style="margin-bottom: 20px;">
        <br>
    <label for="matricula">Matrícula </label>
    <input type="text" id="matricula" placeholder="Digite sua Matrícula" style="margin-bottom: 20px;">
        <br>
    <button type="submit">ACESSAR</button>

</form> 
</div>'''