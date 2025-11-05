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

