//Funções JavaScript responsaveis por abrir e fechar da barra lateral
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.boxShadow = "0px 1px 6px 5px rgba(148, 147, 147, 0.3)";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
  
document.querySelector(".openbtn").addEventListener('click', openNav);
document.querySelector(".closebtn").addEventListener('click', closeNav);

//Função de seleção de sessão da barrala lateral
export function sessaoSelecionada(pagina){
    const paginas = document.querySelectorAll(".sessao");
    paginas[0].style.backgroundColor = "lightgray";

    //CONSERTAR O PROBLEMA DE DESTAQUE DA SESSÃO SELECIONADA
    paginas.forEach(pag => {
        const textoSessao = pag.querySelector(".textoSessao").textContent;
        pag.addEventListener("click", () => {
            if(textoSessao === pagina){
                paginas.forEach(outrosEle => {
                    outrosEle.style.backgroundColor = "white";
                })
                pag.style.backgroundColor = "lightgray";
            }
        })
    })
}

//Função de fechar a barra lateral depois do click
export function clickFecha(){
    const larguraJanela = window.innerWidth;
    if(larguraJanela < 1000){
        document.getElementById("mySidebar").style.width = "0";
    }
}

