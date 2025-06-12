--------------------------------HTML--------------------------------

<button id="botaoOpcoes">Mostrar Opções</button>
<div id="conteudoOpcoes" style="display: none;">
  <p>Opção 1</p>
  <p>Opção 2</p>
  <p>Opção 3</p>
</div>

--------------------------------Script--------------------------------

const botao = document.getElementById('botaoOpcoes');
const conteudo = document.getElementById('conteudoOpcoes');

botao.addEventListener('click', function() {
  if (conteudo.style.display === 'none') {
    conteudo.style.display = 'block';
  } else {
    conteudo.style.display = 'none';
  }
});

**document.getElementById():** Obtém os elementos HTML com os IDs especificados. 
**addEventListener('click', function()):** Este código adiciona um evento de clique ao botão. Quando o botão é clicado, a função definida dentro do addEventListener é executada. 
if (conteudo.style.display === 'none'): Verifica se o conteúdo está oculto.
conteudo.style.display = 'block';: Exibe o conteúdo. 
else: Se o conteúdo estiver visível, oculta-o.
conteudo.style.display = 'none';: Oculta o conteúdo. 