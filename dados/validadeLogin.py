from dados.lista_turmas import *

#Função de validação de login
def validadeLogin(lista_turmas, matricula, senha):
    print('Matricula --> '+matricula)
    print('Senha --> '+senha)
    for turma in lista_turmas:
        for usuario in turma['alunos']:
            if matricula == usuario['matricula'] and senha == usuario['senha']:
                if usuario['status'] == 'aluno-lider':
                    return [turma['ID'], 'aluno-lider']
            
                elif usuario['status'] == 'aluno':
                    return [turma['ID'], 'aluno']
    
    return 'invalido'
