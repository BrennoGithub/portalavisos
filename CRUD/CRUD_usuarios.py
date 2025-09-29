#Função GET
def GET_usuarios(tipoUsuario, Alunos, Professores):
    match tipoUsuario:
        case "aluno":
            alunos = Alunos.query.all()
            lista_alunos = []
            for iten in alunos:
                objetoAluno = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema,
                    "liderTurma": iten.liderTurma,
                    "turma": iten.turma
                }
                lista_alunos.append(objetoAluno)
            return lista_alunos
           
        
        case "professor":
            professores = Professores.query.all()
            lista_professores = []
            for iten in professores:
                objetoProfessor = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema
                }
                lista_alunos.append(objetoProfessor)
            return lista_professores
            
def GET_usuario(Alunos, Professores, session, matricula):
    usuario = None
    usuario = Alunos.query.get_or_404(matricula)
    if usuario == None:
        usuario = Professores.query.get_or_404(matricula)
        if usuario == None:
            usuario = "MENSAGEM SERVIDOR: Matricula invalida"
        else:
            session["tipoUsuario"] = "professor"
    else:
        session["tipoUsuario"] = "aluno"
    return usuario