#Função GET
def GET_informartivos(Informativos, Turma_informativo, ID_turma, Dados_avaliacoes, Dados_eventos, Dados_materiais, Materias):
    lista_relacionamento = Turma_informativo.query.filter_by(turma=ID_turma).all() #Lista informativos-turma
   
    informativos = []
    for iten in lista_relacionamento:
        dado = Informativos.query.get_or_404(iten.informativo)
        informativos.append(dado)

    lista_informativos = []
    for info in informativos:
        objetoInformativo = {}
        dadosAdicionais = None
        materia = None
        Assunto = str(info.assunto)

        match Assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=info.ID_informativo).first() #Retorna apenas a primeira ocorrencia
                materia = Materias.query.get_or_404(dadosAdicionais.materia)
                dataCriacao_Fragmentada = str(info.dataCriacao).split(" ")
                dataAvaliacao_Fragmentada = str(dadosAdicionais.dataAvaliacao).split(" ")
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": dataCriacao_Fragmentada[0], # <-- Converter data e hora em razão de possuir um formato não compartivel
                    "horaCriacao": dataCriacao_Fragmentada[1],
                    "tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    "materia": materia.nomeMateria,
                    "assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    "dataAvaliacao": dataAvaliacao_Fragmentada[0],
                    "horaAvaliacao": dataAvaliacao_Fragmentada[1]
                }
            case "Evento":
                dadosAdicionais = Dados_eventos.query.filter_by(informativo=info.ID_informativo).first()
                dataCriacao_Fragmentada = str(info.dataCriacao).split(" ")
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": dataCriacao_Fragmentada[0],
                    "horaCriacao": dataCriacao_Fragmentada[1],
                    "nomeEvento": dadosAdicionais.nomeEvento,
                    "data_InicioEvento": str(dadosAdicionais.data_InicioEvento),
                    "data_FinalEvento": str(dadosAdicionais.data_FinalEvento),
                    "hora_InicioEvento": str(dadosAdicionais.hora_InicioEvento),
                    "hora_FinalEvento": str(dadosAdicionais.hora_FinalEvento)
                }
            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.filter_by(informativo=info.ID_informativo).first()
                dataCriacao_Fragmentada = str(info.dataCriacao).split(" ")
                materia = Materias.query.get_or_404(dadosAdicionais.materia)
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": dataCriacao_Fragmentada[0],
                    "horaCriacao": dataCriacao_Fragmentada[1],
                    "materia": materia.nomeMateria,
                    "assuntoMaterial": dadosAdicionais.assuntoMaterial
                }
            case _:
                dataCriacao_Fragmentada = str(info.dataCriacao).split(" ")
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": dataCriacao_Fragmentada[0],
                    "horaCriacao": dataCriacao_Fragmentada[1]
                }
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
            print("Aviso")