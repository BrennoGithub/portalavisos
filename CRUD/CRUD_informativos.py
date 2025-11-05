from Modelos.Informativos import *
from Modelos.Materias import Materias
from config import db
from datetime import datetime

#Função GET
def GET_informartivos(ID_turma):
    lista_relacionamento = Turma_informativo.query.filter_by(turma=ID_turma).all() #Lista informativos-turma
   
    informativos = []
    for iten in lista_relacionamento:
        dado = Informativos.query.get_or_404(iten.informativo)
        informativos.append(dado)

    lista_informativos = []
    for info in informativos:
        objetoInformativo = {}
        objetoInformativo["ID_informativo"] = info.ID_informativo
        objetoInformativo["assunto"] = info.assunto
        objetoInformativo["mensagem"] = info.mensagem
        
        dataCriacao_Fragmentada = str(info.dataCriacao).split(" ")
        objetoInformativo["dataCriacao"] = dataCriacao_Fragmentada[0]
        objetoInformativo["horaCriacao"] = dataCriacao_Fragmentada[1]

        dadosAdicionais = None
        materia = None

        match info.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=info.ID_informativo).first() #Retorna apenas a primeira ocorrencia
                objetoInformativo["tipoAvaliacao"] = dadosAdicionais.tipoAvaliacao
                objetoInformativo["assuntoAvaliacao"] = dadosAdicionais.assuntoAvaliacao
                
                dataAvaliacao_Fragmentada = str(dadosAdicionais.dataAvaliacao).split(" ")
                objetoInformativo["dataAvaliacao"] = dataAvaliacao_Fragmentada[0]
                objetoInformativo["horaAvaliacao"] = dataAvaliacao_Fragmentada[1]
                
                materia = Materias.query.get_or_404(dadosAdicionais.materia)
                objetoInformativo["materia"] = materia.nomeMateria

            case "Evento":
                dadosAdicionais = Dados_eventos.query.filter_by(informativo=info.ID_informativo).first()
                objetoInformativo["nomeEvento"] = dadosAdicionais.nomeEvento 
                objetoInformativo["data_InicioEvento"] = str(dadosAdicionais.data_InicioEvento)
                objetoInformativo["data_FinalEvento"] = str(dadosAdicionais.data_FinalEvento)
                objetoInformativo["hora_InicioEvento"] = str(dadosAdicionais.hora_InicioEvento)
                objetoInformativo["hora_FinalEvento"] = str(dadosAdicionais.hora_FinalEvento)
                
            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.filter_by(informativo=info.ID_informativo).first()
                materia = Materias.query.get_or_404(dadosAdicionais.materia)

                objetoInformativo["materia"] = materia.nomeMateria
                objetoInformativo["assuntoMaterial"] = dadosAdicionais.assuntoMaterial
                
        lista_informativos.append(objetoInformativo)

    return lista_informativos

#Função POST
def POST_informativo(assuntoInformativo, objetoInformativo):
    novo_informativo = Informativos(
        assunto = objetoInformativo["assunto"], 
        mensagem = objetoInformativo["mensagem"]
    )

    relacionamento = Turma_informativo(
        turma = objetoInformativo["ID_turma"],
        #informativo = objetoInformativo["ID_informativo"] <-- DESCOBRIR COMO ACESSAR O ID_INFORMATIVO QUE VAI SER CRIADO
    )

    novos_dadosAdicionais = None

    match assuntoInformativo:
        case "Avaliação":
            novos_dadosAdicionais = Dados_avaliacoes(
                tipoAvaliacao = objetoInformativo["tipoAvaliacao"],
                assuntoAvaliacao = objetoInformativo["assuntoAvaliacao"],
                dataAvaliacao = datetime.strptime(objetoInformativo["dataAvaliacao"], "%Y-%m-%d %H:%M:%S"), # <-- converter data para objeto Python
                #informativo = objetoInformativo["tipoAvaliacao"],
                materia = objetoInformativo["materia"]
            )

        case "Evento":
            novos_dadosAdicionais = Dados_eventos(
                nomeEvento = objetoInformativo["nomeEvento"],
                #data_InicioEvento = db.Column(db.Date, nullable=False),
                #data_FinalEvento = db.Column(db.Date, nullable=False),
                #hora_InicioEvento = db.Column(db.Time, nullable=False),
                #hora_FinalEvento = db.Column(db.Time, nullable=False),
                #informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False),
            )

        case "Material Didatico":
            novos_dadosAdicionais = Dados_materiais(
                assuntoMaterial = objetoInformativo["assuntoMaterial"],
                materia = objetoInformativo["materia"],
                #informativo = db.Column(db.Integer, db.ForeignKey('informativos.ID_informativo'), nullable=False)
            )
        
        case _:
            novos_dadosAdicionais = "Sem dados adicionais"

    if novos_dadosAdicionais != None:
        db.session.add(novo_informativo, relacionamento, novos_dadosAdicionais)
        db.session.commit()
    elif novos_dadosAdicionais == "Sem dados adicionais":
        db.session.add(novo_informativo, relacionamento)
        db.session.commit()

    print("MENSAGEM SERVIDOR: Informativo criado com sucesso")
    return {"mensagemServidor":"Informativo criado com sucesso"}
