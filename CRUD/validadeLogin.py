from dados.lista_turmas import *

#Função de validação de login
def validadeLogin(lista_turmas, matricula, senha):
    for turma in lista_turmas:
        for usuario in turma['alunos']:
            if matricula == usuario['matricula'] and senha == usuario['senha']:
                if usuario['status'] == 'aluno-lider':
                    return [usuario, turma]
            
                elif usuario['status'] == 'aluno':
                    return [usuario, turma]
            
    return 'invalido'
