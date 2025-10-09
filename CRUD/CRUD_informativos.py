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

        if Assunto == "Avaliação":
            dadosAdicionais = Dados_avaliacoes.query.filter_by(informativo=info.ID_informativo).first() #Retorna apenas a primeira ocorrencia
            materia = Materias.query.get_or_404(dadosAdicionais.materia)
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": str(info.dataCriacao), # <-- Converter data e hora em razão de possuir um formato não compartivel
                    "tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    "materia": materia.nomeMateria,
                    "assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    "dataAvaliacao": str(dadosAdicionais.dataAvaliacao)
                }
            
        elif  Assunto == "Evento":
            dadosAdicionais = Dados_eventos.query.filter_by(informativo=info.ID_informativo).first()
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": str(info.dataCriacao),
                    "nomeEvento": dadosAdicionais.nomeEvento,
                    "data_InicioEvento": str(dadosAdicionais.data_InicioEvento),
                    "data_FinalEvento": str(dadosAdicionais.data_FinalEvento),
                    "hora_InicioEvento": str(dadosAdicionais.hora_InicioEvento),
                    "hora_FinalEvento": str(dadosAdicionais.hora_FinalEvento)
                }
           
        elif Assunto == "Material Didatico":
            dadosAdicionais = Dados_materiais.query.filter_by(informativo=info.ID_informativo).first()
            materia = Materias.query.get_or_404(dadosAdicionais.materia)
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": str(info.dataCriacao),
                    "materia": materia.nomeMateria,
                    "assuntoMaterial": dadosAdicionais.assuntoMaterial
                }
            
        else:
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": str(info.dataCriacao)
                }
            

        lista_informativos.append(objetoInformativo)
    
    print("------------------------")
    print(lista_informativos[2])


    return lista_informativos