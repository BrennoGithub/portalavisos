const lista_alunos = [
    {
        nome: 'Júlio César',
        matricula: '20231144010043',
        turma: 'infov3'
    }
];

function BD(event){
    event.preventDefault()
    let nome = document.getElementById("nome").value;
    let matricula = document.getElementById("matricula").value;
    let turma = document.getElementById('turma').value;

    let matriculado = ''
    for(let x = 0; x<lista_alunos.length; x++){
        if(lista_alunos[x].nome === nome && lista_alunos[x].matricula === matricula && lista_alunos.turma === turma){
            matriculado = true;
        }else{
            matriculado = false;
        }
    }

    if(matriculado){
        alert('Bem-vindo');
    }else{
        alert('Login incorreto');
    }
}