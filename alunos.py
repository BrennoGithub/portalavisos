lista_alunos = [ 
    {
        'nome':'Adriely Daiany',
        'matricula':'20231144010036',
        'turma':'info3v',
        'senha':'info36',
        'status':'aluno',
    },
    {
        'nome':'Afonso Silva',
        'matricula':'20231144010009',
        'turma':'info3v',
        'senha':'info09',
        'status':'aluno',
    },
    {
        'nome':'Alicia Martins',
        'matricula':'20231144010066',
        'turma':'info3v',
        'senha':'info66',
        'status':'aluno',
    },
    {
        'nome':'Amilton de Almeida',
        'matricula':'20231144010030',
        'turma':'info3v',
        'senha':'info30',
        'status':'aluno',
    },
    {
        'nome':'Ananda Beatriz',
        'matricula':'20231144010063',
        'turma':'info3v',
        'senha':'info63',
        'status':'aluno',
    },
    {
        'nome':'Antony Gabriel',
        'matricula':'20231144010052',
        'turma':'info3v',
        'senha':'info52',
        'status':'aluno',
    },    
    {
        'nome':'Breno Gusmão',
        'matricula':'20231144010022',
        'turma':'info3v',
        'senha':'info22',
        'status':'aluno',
    },
    {
        'nome':'Bruno Gustavo',
        'matricula':'20231144010008',
        'turma':'info3v',
        'senha':'info08',
        'status':'aluno',
    },    
    {
        'nome':'Cauã de Lima',
        'matricula':'20231144010003',
        'turma':'info3v',
        'senha':'info03',
        'status':'aluno',
    },
    {
        'nome':'Davi Galdino',
        'matricula':'20231144010032',
        'turma':'info3v',
        'senha':'info32',
        'status':'aluno',
    },   
    {
        'nome':'Edvan Coelho',
        'matricula':'20231144010021',
        'turma':'info3v',
        'senha':'info21',
        'status':'aluno',
    },
    {
        'nome':'Fabiana Antunes',
        'matricula':'20231144010062',
        'turma':'info3v',
        'senha':'info62',
        'status':'aluno',
    },
    {
        'nome':'Geovana Gabriele',
        'matricula':'20231144010080',
        'turma':'info3v',
        'senha':'info80',
        'status':'aluno',
    },
    {
        'nome':'Guilherme Narciso',
        'matricula':'20231144010023',
        'turma':'info3v',
        'senha':'info23',
        'status':'aluno',
    },
    {
        'nome':'Harlley Rocha',
        'matricula':'20231144010051',
        'turma':'info3v',
        'senha':'info51',
        'status':'aluno',
    },
    {
        'nome':'Ingrid Beatriz',
        'matricula':'20231144010041',
        'turma':'info3v',
        'senha':'info41',
        'status':'aluno',
    },
    {
        'nome':'Isadora Fernandes',
        'matricula':'20231144010025',
        'turma':'info3v',
        'senha':'info25',
        'status':'aluno',
    },
    {
        'nome':'Jadson Lima',
        'matricula':'20231144010075',
        'turma':'info3v',
        'senha':'info75',
        'status':'aluno',
    },
    {
        'nome':'Julia Bezerra',
        'matricula':'20231144010055',
        'turma':'info3v',
        'senha':'info55',
        'status':'aluno',
    },
    {
        'nome':'Júlio Cesar',
        'matricula':'20231144010043',
        'turma':'info3v',
        'senha':'info43',
        'status':'aluno-lider',
    },
    {
        'nome':'Ketlyn Kauany',
        'matricula':'20231144010081',
        'turma':'info3v',
        'senha':'info81',
        'status':'aluno',
    },
    {
        'nome':'Lucas de Lima',
        'matricula':'20231144010027',
        'turma':'info3v',
        'senha':'info27',
        'status':'aluno',
    },
    {
        'nome':'Maria Gabriella',
        'matricula':'20231144010015',
        'turma':'info3v',
        'senha':'info15',
        'status':'aluno',
    },
    {
        'nome':'Maria Luisa',
        'matricula':'20231144010067',
        'turma':'info3v',
        'senha':'info67',
        'status':'aluno',
    },
    {
        'nome':'Mariana Gabrielly',
        'matricula':'20231144010029',
        'turma':'info3v',
        'senha':'info29',
        'status':'aluno',
    },  
    {
        'nome':'Marina Ribeiro',
        'matricula':'20231144010040',
        'turma':'info3v',
        'senha':'info40',
        'status':'aluno',
    },
    {
        'nome':'Matheus da Silva',
        'matricula':'20231144010001',
        'turma':'info3v',
        'senha':'info01',
        'status':'aluno',
    },  
    {
        'nome':'Mikelly da Silva',
        'matricula':'20231144010069',
        'turma':'info3v',
        'senha':'info69',
        'status':'aluno',
    },
    {
        'nome':'Radmila de Souza',
        'matricula':'20231144010031',
        'turma':'info3v',
        'senha':'info31',
        'status':'aluno',
    },  
    {
        'nome':'Ramon Lincon',
        'matricula':'20231144010020',
        'turma':'info3v',
        'senha':'info20',
        'status':'aluno',
    },
    {
        'nome':'Vinícius Alves',
        'matricula':'20231144010007',
        'turma':'info3v',
        'senha':'info07',
        'status':'aluno',
    },  
    {
        'nome':'Vinícius Costa',
        'matricula':'20231144010054',
        'turma':'info3v',
        'senha':'info54',
        'status':'aluno',
    },
    {
        'nome':'Vitória da Silva',
        'matricula':'20221144010080',
        'turma':'info3v',
        'senha':'info80',
        'status':'aluno',
    },     
]

#Função de validação de login
def validadeLogin(lista_alunos, matricula, senha):
    print('-> '+matricula)
    print('-> '+senha)
    for usuario in range(0, len(lista_alunos)):
        if matricula == lista_alunos[usuario]['matricula'] and senha == lista_alunos[usuario]['senha']:
            if lista_alunos[usuario]['status'] == 'aluno-lider':
                usuario = len(lista_alunos)
                return 'aluno-lider'
            
            elif lista_alunos[usuario]['status'] == 'aluno':
                usuario = len(lista_alunos)
                return 'aluno'
            
    return 'invalido'
