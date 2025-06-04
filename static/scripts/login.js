import {tela_login, tela_lideres, tela_comun} from "../../Rascunho_Web/telas.js";
import {formAviso} from "./form_avisos.js"
import {lista_alunos, lista_lideres_turma} from "../../Rascunho_Web/dados.js";

document.getElementById("conteudo").innerHTML = tela_login;

//Funções de validação dos campos de login
document.getElementById('nome').addEventListener('blur', () => {
    const nome = document.getElementById("nome").value;
    if(nome === ''){
        document.getElementById("nome").style.borderColor = 'red';
    }else{
        document.getElementById("nome").style.borderColor = 'green';
    }
});

document.getElementById('matricula').addEventListener('blur', () => {
    const matricula = document.getElementById("matricula").value;
    if(matricula.length < 14 || matricula.length > 14){
        document.getElementById("matricula").style.borderColor = 'red';
    }else{
        document.getElementById("matricula").style.borderColor = 'green';
    }
});


//Função para validar o login do usuário
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const nome = document.getElementById("nome").value;
    if(nome === ''){
        document.getElementById("nome").style.borderColor = 'red';
    }else{
        document.getElementById("nome").style.borderColor = 'green';
    }

    const matricula = document.getElementById("matricula").value;
    if(matricula.length < 14 || matricula.length > 14){
        document.getElementById("matricula").style.borderColor = 'red';
    }else{
        document.getElementById("matricula").style.borderColor = 'green';
    }



    let matriculado = '';
    for(let x = 0; x<lista_alunos.length; x++){
        if(lista_alunos[x].nome === nome && lista_alunos[x].matricula === matricula){
            matriculado = true;
            x = lista_alunos.length;
            
        }else{
            matriculado = false;
           
        }
    }

    if(matriculado){
        let lider_turma = '';
        for(let x = 0; x<lista_lideres_turma.length; x++){
            if(lista_lideres_turma[x].nome === nome && lista_lideres_turma[x].matricula === matricula){
                lider_turma = true;
                x = lista_lideres_turma.length;
                
            }else{
                lider_turma = false;
               
            }
        };

        //Verifica os lideres de turma
        if(lider_turma){ 
            document.getElementById("conteudo").innerHTML = tela_lideres;
            formAviso();
           
        }
        //Caso não seja um lider de turma, será apresentado a tela comun
        else{
            document.getElementById("conteudo").innerHTML = tela_comun;
        }

    }else{
        alert('Login incorreto');
    }
});
