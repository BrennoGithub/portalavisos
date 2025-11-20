from Modelos.Usuarios import *

#Função GET
def GET_usuarios(tipoUsuario):
    lista_usuarios = []
    match tipoUsuario:
        case "aluno":
            alunos = Alunos.query.all()
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
                lista_usuarios.append(objetoAluno)
           
        
        case "professor":
            professores = Professores.query.all()
            for iten in professores:
                objetoProfessor = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema
                }
                lista_usuarios.append(objetoProfessor)
    return lista_usuarios
            
            
def GET_usuario(session, matricula):
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