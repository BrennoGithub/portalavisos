#Função de validação de login
def validadeLogin(lista_alunos, matricula, senha):
    for usuario in lista_alunos:
        if matricula == usuario["matricula"] and senha == usuario["senha"]:
                return usuario
            
    return "invalido"
