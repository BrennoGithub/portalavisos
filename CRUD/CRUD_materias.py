#Função GET
def GET_materias(Materias, Cursos, Curso_materia, Curso_turma, ID_turma):
    curso = Curso_turma.query.filter_by(turma=ID_turma).first()
    #Trabalhar na função GET de Materiais
    

    return ""