from Modelos.Materias import *
from Modelos.Turmas import Curso_turma

#Função GET
def GET_materias(ID_turma):
    obj_curso = Curso_turma.query.filter_by(turma=ID_turma).first()
    lista_materias_curso = Curso_materia.query.filter_by(curso=obj_curso.curso).all()
    
    lista_materias = []

    for iten in lista_materias_curso:
        materia = Materias.query.get_or_404(iten.materia)
        objetoMateria = {}
        objetoMateria['ID_materia'] = materia.ID_materia
        objetoMateria['nomeMateria'] = materia.nomeMateria
        lista_materias.append(objetoMateria)

    return lista_materias