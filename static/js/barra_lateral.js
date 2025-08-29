//Funções JavaScript responsaveis por abrir e fechar da barra lateral
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("mySidebar").style.boxShadow = "0px 1px 6px 5px rgba(148, 147, 147, 0.3)";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
  
document.querySelector(".openbtn").addEventListener('click', openNav);
document.querySelector(".closebtn").addEventListener('click', closeNav);

const botao_criaInformativo = document.querySelector(".icon_cria");
const opcoesInformativos = document.querySelector(".areaOpcoes");
botao_criaInformativo.addEventListener("click", function(){
    switch (opcoesInformativos.style.display){
        case "none":
            opcoesInformativos.style.display = "block";
            break;
        case "block":
            opcoesInformativos.style.display = "none";
            break
      default:
            opcoesInformativos.style.display = "block";
            break;
    }
})

//const opcoesInformativo = document.querySelectorAll(".opcaoInformativo")