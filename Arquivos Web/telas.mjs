export const tela_login = `<nav>
</nav>
<div id="forms">
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
    <label>Turma</label>
    <select style="margin-bottom: 20px;" id="turma">
        <option value="">Turmas</option>
        <option value="infov1">Info 1V</option>
        <option value="infov2">Info 2V</option>
        <option value="infov3">Info 3V</option>
        <option value="infov4">Info 4V</option>
    </select>
        <br>
    <button type="submit">ACESSAR</button>

</form> 
</div>
`;

//Tela de avisos onde só os lideres de turma podem ver
export const tela_inicial_lideres = `
<h1>Sistema de Avisos de INFO V</h1>
<hr>
<br>
<div class="area">
    <div class="areaConteudo" style="display: flex;">
            <div class="areaMaterial" style="width: 300px;">
                <h2>Provas e Trabalho</h2>
                    <hr>
                <span>Area conteudo</span>
            </div>

            <div class="areaMaterial" style="width: 300px;">
                <h2>Material de Estudo</h2>
                    <hr>
                <span>Area conteudo</span>
            </div>
    </div>

    <div class="areaAdicao">
        <button id="Adi_Mural">+</button> Tela dos lideres
    </div>
</div>
`;

//Tela de avisos onde todo mundo que não é lider de turma pode ver
export const tela_inicial_comun = `
<h1>Sistema de Avisos de INFO V</h1>
<hr>
<br>
<div class="area">
    <div class="areaConteudo" style="display: flex;">
            <div class="areaMaterial" style="width: 300px;">
                <h2>Provas e Trabalho</h2>
                    <hr>
                <span>Area conteudo</span>
            </div>

            <div class="areaMaterial" style="width: 300px;">
                <h2>Material de Estudo</h2>
                    <hr>
                <span>Area conteudo</span>
            </div>
    </div>
</div>
`;