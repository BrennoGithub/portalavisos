//Funções de validação de campos de login
document.getElementById('matricula').addEventListener('blur', function(){
    let campo_matricula = document.getElementById('matricula').value;
    if(campo_matricula === ''){
        document.querySelector('.area_matricula').style.borderColor = 'red';

    }else if(campo_matricula.includes(' ')){
        document.querySelector('.area_matricula').style.borderColor = 'red';

    }else{
        document.querySelector('.area_matricula').style.borderColor = 'green';
    }
});

document.getElementById('senha').addEventListener('blur', function(){
    let campo_senha = document.getElementById('senha').value;
    if(campo_senha === ''){
        document.querySelector('.senha_turma').style.borderColor = 'red';
    }else{
        document.querySelector('.senha_turma').style.borderColor = 'green';
    }
    
});

//Função de validação de login
document.querySelector(".botao_campo_login").addEventListener('click', function(){
    let matricula_valida = '';
    let campo_matricula = document.getElementById('matricula').value;
    if(campo_matricula === ''){
        document.querySelector('.area_matricula').style.borderColor = 'red';
        matricula_valida = false;

    }else if(campo_matricula.includes(' ')){
        document.querySelector('.area_matricula').style.borderColor = 'red';
        matricula_valida = false;

    }else{
        document.querySelector('.area_matricula').style.borderColor = 'green';
        matricula_valida = true;
    }

    let senha_valida = '';
    if(campo_senha === ''){
        document.querySelector('.senha_turma').style.borderColor = 'red';
        senha_valida = false;
    }else{
        document.querySelector('.senha_turma').style.borderColor = 'green';
        senha_valida = true;
    }

    if(matricula_valida && senha_valida){
        alert('Login valido')
    }else{
        alert('Login invalido')
    }
})