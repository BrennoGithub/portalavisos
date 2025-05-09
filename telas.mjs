export const tela_login = `<nav>
</nav>
<div id="forms">
<header>
    <h1>Login</h1>
</header>

<form>
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
    <button onclick="BD(event)" type="submit">ACESSAR</button>

</form> 
</div>
`;

export const tela_inicial = `
<h1>Sistema de Avisos de INFO V</h1>
<hr>
<br>
<h2>Mural</h2>
<div class="area">


</div>

<h2>Provas e Trabalho</h2>
<div class="area">

</div>

<h2>Material de Estudo</h2>
<div class="area">

</div>
`;