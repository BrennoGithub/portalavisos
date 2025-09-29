#Função GET
def GET_turmas(Turmas, session):
    turma = Turmas.query.get_or_404(session["ID_turma"])
    objetoTurma = {
        "ID_turma": turma.ID_turma,
        "nomeTurma": turma.nomeTurma,
        "dataCriacao": turma.dataCriacao,
        "turno": turma.turno,
        "periodo": turma.periodo
    }
    return objetoTurma

#CRIAR FUNÇÃO PARA PROCURAR A TURMA DO PROFESSOR