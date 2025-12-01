from App import db

#Ao criar a classe, der o nome da tabela
class Materias(db.Model):
    ID_materia = db.Column(db.Integer, primary_key=True)
    nomeMateria = db.Column(db.String(100), nullable=False)

class Cursos(db.Model):
    ID_curso = db.Column(db.Integer, primary_key=True)
    nomeCurso = db.Column(db.String(100), nullable=False)

class Curso_materia(db.Model):
    ID_relacionamento = db.Column(db.Integer, primary_key=True)
    curso = db.Column(db.Integer, db.ForeignKey('cursos.ID_curso'), nullable=False)
    materia = db.Column(db.Integer, db.ForeignKey('materias.ID_materia'), nullable=False)
