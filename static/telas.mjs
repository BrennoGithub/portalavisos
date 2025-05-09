// tela_login
export const tela_login = `
<nav>
    <header>
        <h1>Login</h1>
    </header>
    <form id="loginForm">
        <label for="nome">Aluno: </label>
        <input type="text" id="nome" placeholder="Digite seu Nome" style="margin-bottom: 20px;">
        <br>
        <label for="matricula">Matrícula: </label>
        <input type="text" id="matricula" placeholder="Digite sua Matrícula" style="margin-bottom: 20px;">
        <br>
        <label>Escolha sua Turma</label>
        <select style="margin-bottom: 20px;" id="turma">
            <option value="turmas">Turmas</option>
            <option value="infov1">Info 1V</option>
            <option value="infov2">Info 2V</option>
            <option value="infov3">Info 3V</option>
            <option value="infov4">Info 4V</option>
        </select>
        <br>
        <button type="submit">ACESSAR</button>
    </form>
</nav>
`;


export const tela_inicial = `
<nav>
    <left>
        <a href="./cadastro.html"><button>Voltar</button></a>
    </left>
</nav>
<h1>Sistema de Avisos de INFO V</h1>
<hr>
<br>
<h2>Mural</h2>
<div class="area">
    <!-- Mural de avisos -->
</div>

<h2>Provas e Trabalho</h2>
<div class="area">
    <!-- Provas e Trabalho -->
</div>

<h2>Material de Estudo</h2>
<div class="area">
    <!-- Material de Estudo -->
</div>
`;
