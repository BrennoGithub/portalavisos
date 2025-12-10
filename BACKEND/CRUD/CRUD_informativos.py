from Modelos.Informativos import *
from Modelos.Materias import Materias
from CRUD.CRUD_arquivos import GET_arquivos, POST_arquivos
from App import db
from datetime import datetime
#ADICIONAR O REGISTRO DE ARQUIVOS QUE ESTÃO ANEXADOS COM OS INFORMATIVOS

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

        objetoInformativo["anexos"] = GET_arquivos(info.ID_informativo)

        dadosAdicionais = None
        materia = None

        match info.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=info.ID_informativo).first() #Retorna apenas a primeira ocorrencia
                objetoInformativo["tipoAvaliacao"] = dadosAdicionais.tipoAvaliacao
                objetoInformativo["assuntoAvaliacao"] = dadosAdicionais.assuntoAvaliacao
                
                #Analisar como conveter um objeto Python de tempo para string com datatime e strftime
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
    novo_informativo = None
    if objetoInformativo["assunto"] == "" or objetoInformativo["assunto"] == " ":
        novo_informativo = Informativos(
            mensagem = objetoInformativo["mensagem"]
        )
    else:
        novo_informativo = Informativos(
            assunto = objetoInformativo["assunto"], 
            mensagem = objetoInformativo["mensagem"]
        )
    db.session.add(novo_informativo)
    db.session.commit()

    relacionamento = Turma_informativo(
        turma = objetoInformativo["ID_turma"],
        informativo = novo_informativo.ID_informativo
    )
    db.session.add(relacionamento)
    db.session.commit()

    #POST_arquivos(novo_informativo.ID_informativo, objetoInformativo["tipoAnexo"], objetoInformativo["anexo"])

    novos_dadosAdicionais = None
    match assuntoInformativo:
        case "Avaliação":
            novos_dadosAdicionais = Dados_avaliacoes(
                tipoAvaliacao = objetoInformativo["tipoAvaliacao"],
                assuntoAvaliacao = objetoInformativo["assuntoAvaliacao"],
                dataAvaliacao = datetime.strptime(f'{objetoInformativo["dataAvaliacao"]} {objetoInformativo["horaAvaliacao"]}', "%Y-%m-%d %H:%M:%S"), # <-- converter data para objeto Python
                informativo = novo_informativo.ID_informativo,
                materia = objetoInformativo["materia"]
            )

        case "Evento":
            novos_dadosAdicionais = Dados_eventos(
                nomeEvento = objetoInformativo["nomeEvento"],
                data_InicioEvento = datetime.strptime(objetoInformativo["data_InicioEvento"], "%Y-%m-%d"),
                data_FinalEvento = datetime.strptime(objetoInformativo["data_FinalEvento"], "%Y-%m-%d"),
                hora_InicioEvento = datetime.strptime(objetoInformativo["hora_InicioEvento"], "%H:%M:%S"),
                hora_FinalEvento = datetime.strptime(objetoInformativo["hora_FinalEvento"], "%H:%M:%S"),
                informativo = novo_informativo.ID_informativo,
            )

        case "Material Didatico":
            novos_dadosAdicionais = Dados_materiais(
                assuntoMaterial = objetoInformativo["assuntoMaterial"],
                materia = objetoInformativo["materia"],
                informativo = novo_informativo.ID_informativo
            )
    if novos_dadosAdicionais is not None:
        db.session.add(novos_dadosAdicionais) 
        db.session.commit()

    return True

#Função PUT
def PUT_informativo(ID_informativo, assuntoInformativo, objetoInformativo):
    informativo = Informativos.query.get(ID_informativo)
    if informativo == None:
        print("MENSAGEM SERVIDOR: Informativo não encontrado")
        return {"mensagemServidor": "Informativo não encontrado"}
   
    if informativo.mensagem != objetoInformativo["mensagem"]:
        informativo.mensagem = objetoInformativo["mensagem"]
    
    match assuntoInformativo:
        case "Avaliação":
            dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=ID_informativo).first()
            
            if dadosAdicionais.tipoAvaliacao != objetoInformativo["tipoAvaliacao"]:
                dadosAdicionais.tipoAvaliacao = objetoInformativo["tipoAvaliacao"]
            if dadosAdicionais.assuntoAvaliacao != objetoInformativo["assuntoAvaliacao"]:
                dadosAdicionais.assuntoAvaliacao = objetoInformativo["assuntoAvaliacao"]
            if dadosAdicionais.materia != objetoInformativo["materia"]:
                dadosAdicionais.materia = objetoInformativo["materia"]
            if str(dadosAdicionais.dataAvaliacao) != f'{objetoInformativo["dataAvaliacao"]} {objetoInformativo["horaAvaliacao"]}':
                dadosAdicionais.dataAvaliacao = datetime.strptime(f'{objetoInformativo["dataAvaliacao"]} {objetoInformativo["horaAvaliacao"]}', "%Y-%m-%d %H:%M:%S")

        case "Evento":
            dadosAdicionais = Dados_eventos.query.filter_by(informativo=ID_informativo).first()

            if dadosAdicionais.nomeEvento != objetoInformativo["nomeEvento"]:
                dadosAdicionais.nomeEvento = objetoInformativo["nomeEvento"]
            if str(dadosAdicionais.data_InicioEvento) != objetoInformativo["data_InicioEvento"]:
                dadosAdicionais.data_InicioEvento = datetime.strptime(objetoInformativo["data_InicioEvento"], "%Y-%m-%d")
            if str(dadosAdicionais.data_FinalEvento) != objetoInformativo["data_FinalEvento"]:
                dadosAdicionais.data_FinalEvento = datetime.strptime(objetoInformativo["data_FinalEvento"], "%Y-%m-%d")
            if str(dadosAdicionais.hora_InicioEvento) != objetoInformativo["hora_InicioEvento"]:
                dadosAdicionais.hora_InicioEvento = datetime.strptime(objetoInformativo["hora_InicioEvento"], "%H:%M:%S")
            if str(dadosAdicionais.hora_FinalEvento) != objetoInformativo["hora_FinalEvento"]:
                dadosAdicionais.hora_FinalEvento = datetime.strptime(objetoInformativo["hora_FinalEvento"], "%H:%M:%S")

        case "Material Didatico":
            dadosAdicionais = Dados_materiais.query.filter_by(informativo=ID_informativo).first()

            if dadosAdicionais.assuntoMaterial != objetoInformativo["assuntoMaterial"]:
                dadosAdicionais.assuntoMaterial = objetoInformativo["assuntoMaterial"]
            if dadosAdicionais.materia != objetoInformativo["materia"]:
                dadosAdicionais.materia = objetoInformativo["materia"]

        case _:
            if informativo.assunto != objetoInformativo["assunto"]:
                informativo.assunto = objetoInformativo["assunto"]

    db.session.commit()
    
    return True

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

    informativo = Informativos.query.get(ID_informativo)
    if informativo is None:
        print("MENSAGEM SERVIDOR: Informativo não encontrado")
        return {"mensagemServidor": "Informativo não encontrado"}

    if dadosAdicionais is not None:
        db.session.delete(relacionamento)
        db.session.delete(dadosAdicionais)
        db.session.delete(informativo)
    else:
        db.session.delete(relacionamento)
        db.session.delete(informativo)
    db.session.commit()

    return True
