import {tela_login, tela_lideres, tela_comun} from "./telas.mjs";

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

document.getElementById('turma').addEventListener('change', () => {
    let turma = document.getElementById('turma').value;
    if(turma === ''){
        document.getElementById('turma').style.borderColor = 'red';
    }else{
        document.getElementById('turma').style.borderColor = 'green';
    }

});

//Lista de alunos matriculados
const lista_alunos = [
    {
        nome: 'Júlio César',
        matricula: '20231144010043',
        turma: 'infov3'
    },
    {
        nome: 'Breno Gusmão',
        matricula: '20231144010022',
        turma: 'infov3'
    }
    
];

//Lista dos lideres de turma
const lista_lideres_turma = ['Júlio César'];

//Função para validar o login do usuário
function BD(event){
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

    const turma = document.getElementById('turma').value;
    if(turma === ''){
        document.getElementById('turma').style.borderColor = 'red';
    }else{
        document.getElementById('turma').style.borderColor = 'green';
    }


    let matriculado = '';
    for(let x = 0; x<lista_alunos.length; x++){
        if(lista_alunos[x].nome === nome && lista_alunos[x].matricula === matricula && lista_alunos[x].turma === turma){
            matriculado = true;
            x = lista_alunos.length;
            
        }else{
            matriculado = false;
           
        }
    }

    if(matriculado){
        //Se o usuário for um lider e estiver na lista de lideres, será apresentado a tela dos lideres
        if(lista_lideres_turma.includes(nome)){ 
            alert('Bem-vindo');
            document.getElementById("conteudo").innerHTML = tela_lideres;
        }
        //Caso não seja um lider de turma, será apresentado a tela comun
        else{
            alert('Bem-vindo');
            document.getElementById("conteudo").innerHTML = tela_comun;
        }

    }else{
        alert('Login incorreto');
    }
}

document.querySelector('form').addEventListener('submit', BD);