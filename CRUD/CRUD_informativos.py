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

    # Registra informativo na tabela
    db.session.add(novo_informativo)
    db.session.commit()

    informativos_mais_recente = Informativos.query.order_by(Informativos.ID_informativo.desc()).first() # <-- Pega o ID do informativo que foi criado recentemente

    relacionamento = Turma_informativo(
        turma = objetoInformativo["ID_turma"],
        informativo = informativos_mais_recente.ID_informativo
    )

    novos_dadosAdicionais = None

    match assuntoInformativo:
        case "Avaliação":
            novos_dadosAdicionais = Dados_avaliacoes(
                tipoAvaliacao = objetoInformativo["tipoAvaliacao"],
                assuntoAvaliacao = objetoInformativo["assuntoAvaliacao"],
                dataAvaliacao = datetime.strptime(objetoInformativo["dataAvaliacao"], "%Y-%m-%d %H:%M:%S"), # <-- converter data para objeto Python
                informativo = informativos_mais_recente.ID_informativo,
                materia = objetoInformativo["materia"]
            )

        case "Evento":
            novos_dadosAdicionais = Dados_eventos(
                nomeEvento = objetoInformativo["nomeEvento"],
                data_InicioEvento = datetime.strptime(objetoInformativo["data_InicioEvento"], "%Y-%m-%d"),
                data_FinalEvento = datetime.strptime(objetoInformativo["data_FinalEvento"], "%Y-%m-%d"),
                hora_InicioEvento = datetime.strptime(objetoInformativo["hora_InicioEvento"], "%H:%M:%S"),
                hora_FinalEvento = datetime.strptime(objetoInformativo["hora_FinalEvento"], "%H:%M:%S"),
                informativo = informativos_mais_recente.ID_informativo,
            )

        case "Material Didatico":
            novos_dadosAdicionais = Dados_materiais(
                assuntoMaterial = objetoInformativo["assuntoMaterial"],
                materia = objetoInformativo["materia"],
                informativo = informativos_mais_recente.ID_informativo
            )
        
        case _:
            novos_dadosAdicionais = "Sem dados adicionais"

    if novos_dadosAdicionais != None:
        db.session.add(relacionamento, novos_dadosAdicionais)
    elif novos_dadosAdicionais == "Sem dados adicionais":
        db.session.add(relacionamento)
    db.session.commit()

    print("MENSAGEM SERVIDOR: Informativo criado com sucesso")
    return {"mensagemServidor":"Informativo criado com sucesso"}

#Função PUT
def PUT_informativo(ID_informativo, assuntoInformativo, objetoInformativo):
    informativo = Informativos.query.get(ID_informativo)
    if informativo == None:
        print("MENSAGEM SERVIDOR: Informativo não encontrado")
        return {"mensagemServidor":"Informativo não encontrado"}
    
    print("MENSAGEM SERVIDOR: Informativo atualizado com sucesso")
    return {"mensagemServidor":"Informativo atualizado com sucesso"}

#Função DELETE
def DELETE_informativo(ID_informativo, assuntoInformativo):
    relacionamento = Turma_informativo.query.filter_by(informativo=ID_informativo).first()

    dadosAdicionais = None
    match assuntoInformativo:
        case "Avaliação":
            dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=ID_informativo).first()
        case "Evento":
            dadosAdicionais = Dados_eventos.query.filter_by(informativo=ID_informativo).first()
        case "Material Didatico":
            dadosAdicionais = Dados_materiais.query.filter_by(informativo=ID_informativo).first()
        case _:
            dadosAdicionais = "Sem dados adicionais"

    informativo = Informativos.query.get(ID_informativo)
    if informativo == None:
        print("MENSAGEM SERVIDOR: Informativo não encontrado")
        return {"mensagemServidor":"Informativo não encontrado"}

    if dadosAdicionais != None:
        db.session.delete(relacionamento, dadosAdicionais, informativo)
    elif dadosAdicionais == "Sem dados adicionais":
        db.session.delete(relacionamento, dadosAdicionais, informativo)
    else:
        db.session.delete(relacionamento, informativo)
    db.session.commit()

    print("MENSAGEM SERVIDOR: Informativo deletado com sucesso")
    return {"mensagemServidor":"Informativo deletado com sucesso"}
