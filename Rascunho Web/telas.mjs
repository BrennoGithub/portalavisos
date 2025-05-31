//Tela de Login do sistema de avisos
export const tela_login = `
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
    <button type="submit">ACESSAR</button>

</form> 
</div>
`;

//Tela de avisos onde só os lideres de turma podem ver
export const tela_lideres = `
<div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">X</a>
        <a href="#">Avisos</a>
          <hr>
        <a href="#">Avaliações</a>
        <a href="#">Material de Estudo</a>
        <a href="#">Descrição</a>
      </div>
    
      <header style="display: flex;">
          <div id="main">
              <button class="openbtn" onclick="openNav()">☰</button>  
          </div>
          <h1>Portal Avisos de INFO V</h1>
      </header>
          <hr>
          <br>
      
      <article class="area">
          <div class="areaConteudo">
                  <div class="areaMaterial">
                      <h2>Avaliações</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
      
                  <div class="areaMaterial">
                      <h2>Material de Estudo</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
      
                  <div class="areaMaterial">
                      <h2>Avisos</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
          </div>
      </article>
`;

/*Botão de Criação de Aviso
<div class="areaAdicao">
        <button id="Adi_Mural">+</button>
            <br>
    </div>*/

//Tela de avisos onde todo mundo que não é lider de turma pode ver
export const tela_comun = `
<div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">X</a>
        <a href="#">Avisos</a>
          <hr>
        <a href="#">Avaliações</a>
        <a href="#">Material de Estudo</a>
        <a href="#">Descrição</a>
      </div>
     
      <header style="display: flex;">
          <div id="main">
              <button class="openbtn" onclick="openNav()">☰</button>  
          </div>
          <h1>Portal Avisos de INFO V</h1>
      </header>
          <hr>
          <br>
      
      <article class="area">
          <div class="areaConteudo">
                  <div class="areaMaterial">
                      <h2>Avaliações</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
      
                  <div class="areaMaterial">
                      <h2>Material de Estudo</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
      
                  <div class="areaMaterial">
                      <h2>Avisos</h2>
                          <hr>
                      <span>Area conteudo</span>
                  </div>
          </div>
      </article>
`;