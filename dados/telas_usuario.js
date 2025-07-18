const tela_lideres = `
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn">
            <img src="{{ url_for('static', filename='icones/fechar.svg')}}" alt="Icone de fechar" class="icon_fecha">
        </a>

        <a href="form_avisos">
            <img src="{{ url_for('static', filename='icones/adicionar.svg')}}" alt="Icone de cria" class="icon_cria">
        </a>
          <hr>
 
        <a href="#">Mural</a>
        <a href="#">Avisos</a>
        <a href="#">Avaliações</a>
        <a href="#">Eventos</a>
        <a href="#">Material Didatico</a>
        <a href="/logout" class="deslogar"> 
            <img src="{{ url_for('static', filename='icones/Deslogar.svg')}}" alt="Botão de Deslogar" class="icone_deslogar"><span style="margin-left: 10px;">Sair</span>
        </a>

      </div>
    
      <header class="cabeca_pagina">
          <div id="main">
                <img src="{{ url_for('static', filename='icones/menu.svg')}}" alt="Icone de menu" class="icon_menu openbtn">
          </div>
          <h1>Portal Informativo - INFO V</h1>
      </header>
          

      <article class="area">
            <span class="exibicaoAvisos">{{aviso}}</span>
            <span class="exibicaoAvaliacoes">{{avaliacao}}</span>
            <span class="exibicaoEventos">{{evento}}</span>
            <span class="exibicaoMateriais">{{material}}</span>
      </article>
`;

const tela_comun = `
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn">
            <img src="{{ url_for('static', filename='icones/fechar.svg')}}" alt="Icone de fechar" class="icon_fecha">
        </a>
        <a href="#">Mural</a>
        <a href="#">Avisos</a>
        <a href="#">Avaliações</a>
        <a href="#">Eventos</a>
        <a href="#">Material Didatico</a>
        <a href="/logout" class="deslogar"> 
            <img src="{{ url_for('static', filename='icones/Deslogar.svg')}}" alt="Botão de Deslogar" class="icone_deslogar"><span style="margin-left: 10px;">Sair</span>
        </a>
    </div>
     
    <header class="cabeca_pagina">
        <div id="main">
             <img src="{{ url_for('static', filename='icones/menu.svg')}}" alt="Icone de menu" class="icon_menu openbtn">
        </div>
        <h1>Portal Informativo - INFO V</h1>
    </header>
        
      
      <article class="area">
        <span class="exibicaoAvisos">{{aviso}}</span>
        <span class="exibicaoAvaliacoes">{{avaliacao}}</span>
        <span class="exibicaoEventos">{{evento}}</span>
        <span class="exibicaoMateriais">{{material}}</span>
      </article>
`;