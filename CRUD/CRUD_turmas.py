#Função GET
def GET_turma(Turmas, ID_turma):
    turma = Turmas.query.get_or_404(ID_turma)
    objetoTurma = {
        "ID_turma": turma.ID_turma,
        "nomeTurma": turma.nomeTurma,
        "dataCriacao": turma.dataCriacao,
        "turno": turma.turno,
        "periodo": turma.periodo
    }
    return objetoTurma

def GET_turmas(Turmas, Curso_turma, ID_curso):
    cursos = Curso_turma.query.filter_by(curso=ID_curso)
    lista_turmas = []
    for iten in cursos:
        turma = Turmas.query.filter_by(ID_turma=iten.turma)
        objetoTurma = {
            "ID_turma": iten.ID_turma, 
            "nomeTurma": iten.nomeTurma,
            "dataCriacao": iten.dataCriacao,
            "turno": iten.turno,
            "periodo": iten.periodo
        }
        lista_turmas.append(objetoTurma)
    return lista_turmas

#CRIAR FUNÇÃO PARA PROCURAR A TURMA DO PROFESSOR