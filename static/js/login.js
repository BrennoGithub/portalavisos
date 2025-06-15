//Funções de validação de campos de login
document.getElementById('nome').addEventListener('blur', function(){
    const campo_nome = document.getElementById('nome').value;
    if(campo_nome === ''){
        document.querySelector('.area_nome').style.borderColor = 'red';
    }else{
        document.querySelector('.area_nome').style.borderColor = 'black';
    }
    
});

document.getElementById('matricula').addEventListener('blur', function(){
    const campo_matricula = document.getElementById('matricula').value;
    if(campo_matricula === ''){
        document.querySelector('.area_matricula').style.borderColor = 'red';
    }else{
        document.querySelector('.area_matricula').style.borderColor = 'black';
    }
    
});

document.getElementById('turma').addEventListener('blur', function(){
    const campo_turma = document.getElementById('turma').value;
    if(campo_turma === ''){
        document.querySelector('.area_turma').style.borderColor = 'red';
    }else{
        document.querySelector('.area_turma').style.borderColor = 'black';
    }
    
});