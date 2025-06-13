#Dados da aplicação
lista_alunos = [
    {
        'nome': 'Júlio César',
        'matricula': '20231144010043',
        'turma': 'infov3',
        'statu': 'lider'
    }
    ,
    {
        'nome': 'Breno Gusmão',
        'matricula': '20231144010022',
        'turma': 'infov3',
        'statu': 'comun'
    }
]

#Função de validação de login
def validadeLogin(lista_alunos, nome, matricula, turma):
    for usuario in range(0, len(lista_alunos)):
        if nome == lista_alunos[usuario]['nome'] and matricula == lista_alunos[usuario]['matricula'] and turma == lista_alunos[usuario]['turma']:
            if lista_alunos[usuario]['statu'] == 'lider':
                usuario = len(lista_alunos)
                return 'lider'
            
            elif lista_alunos[usuario]['statu'] == 'comun':
                usuario = len(lista_alunos)
                return 'comun'
            
    return 'invalido'

#lista de ids de avisos
lista_id_avisos = []
lista_avisos = []


 
