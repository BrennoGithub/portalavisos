//Funções de validação de campos de login
document.getElementById('matricula').addEventListener('blur', function(){
    const campo_matricula = document.getElementById('matricula').value;
    if(campo_matricula === ''){
        document.querySelector('.area_matricula').style.borderColor = 'red';
    }else{
        document.querySelector('.area_matricula').style.borderColor = 'green';
    }
    
});

document.getElementById('senha').addEventListener('blur', function(){
    const campo_turma = document.getElementById('senha').value;
    if(campo_turma === ''){
        document.querySelector('.senha_turma').style.borderColor = 'red';
    }else{
        document.querySelector('.senha_turma').style.borderColor = 'green';
    }
    
});
