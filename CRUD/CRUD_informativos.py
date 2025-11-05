from Modelos.Informativos import *
from Modelos.Materias import Materias

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
    match assuntoInformativo:
        case "Avaliação":
            print("Avaliacao")

        case "Evento":
            print("Evento")

        case "Material Didatico":
            print("Material Didatico")

        case _:
            print(assuntoInformativo)