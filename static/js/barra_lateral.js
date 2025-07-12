//Funções JavaScript responsaveis por abrir e fechar da barra lateral
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
  
document.querySelector(".openbtn").addEventListener('click', openNav);
document.querySelector(".closebtn").addEventListener('click', closeNav);

//Botão opções de avisos
const botao = document.getElementById('botaoOpcoes');
const conteudo = document.getElementById('conteudoOpcoes');

botao.addEventListener('click', function() {
  if (conteudo.style.display === 'none') {
    conteudo.style.display = 'block';
    
  } else {
    conteudo.style.display = 'none';
  }
});
