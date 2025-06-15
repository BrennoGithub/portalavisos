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
lista_avisos = [
    {
    'ID': 'id',
    'tipo': 'tipo_aviso',
    'assunto': 'assunto',
    'texto': 'texto'}
]

#Função de criação de aviso
def criaAviso(lista_avisos, lista_id_avisos, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_avisos:
        id += 1

    lista_id_avisos.append(id)
    lista_avisos.append({
        'ID': id,
        'tipo': tipo_aviso,
        'assunto': assunto,
        'texto': texto
    })

def exibiAviso(lista_avisos):
    avisos = ''
    for iten in lista_avisos:
        avisos = avisos+f"""<div class="estilo_aviso">
                        <div class="estilo_data">DD/MM/AAAA<br>HH:MM:SS</div>
                        <div class="estilo_assunto">{iten['assunto']}</div>
                        <div class="estilo_texto">{iten['texto']}</div>
                        </div>"""
    return avisos
 
