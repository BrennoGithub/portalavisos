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
                    "turma": iten.turma,
                    "tipoUsuario": "aluno"
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
                    "senhaSistema": iten.senhaSistema,
                    "tipoUsuario": "professor"
                }
                lista_usuarios.append(objetoProfessor)
        case "todos":
            alunos = Alunos.query.all()
            for iten in alunos:
                objetoAluno = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema,
                    "liderTurma": iten.liderTurma,
                    "turma": iten.turma,
                    "tipoUsuario": "aluno"
                }
                lista_usuarios.append(objetoAluno)

            professores = Professores.query.all()
            for iten in professores:
                objetoProfessor = {
                    "matricula": iten.matricula,
                    "nome": iten.nome,
                    "nomeSocial": iten.nomeSocial,
                    "aniversario": iten.aniversario,
                    "senhaSistema": iten.senhaSistema,
                    "tipoUsuario": "professor"
                }
                lista_usuarios.append(objetoProfessor)
                
    return lista_usuarios
            
            
def GET_usuario(matricula):
    objetoUsuario = {}
    listaUsuario = GET_usuarios("todos")
    for usuario in listaUsuario:
        if usuario["matricula"] == matricula:
            objetoUsuario = usuario
            break
    
    if objetoUsuario == {}:
        return "Usuário não encontrado"
    else:
        return objetoUsuario