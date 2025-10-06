#Função GET
#VERIFICAR OS PROBLEMAS DA FUNÇÃO, POIS NÃO ESTAR CONSEGUINDO TRAZER OS INFORMATIVOS.
def GET_informartivos(Informativos, Turma_informativo, ID_turma, Dados_avaliacoes, Dados_eventos, Dados_materiais, Materias):
    lista_relacionamento = Turma_informativo.query.filter_by(turma=ID_turma).all() #Lista informativos-turma
   
    #dados = Informativos.query.get_or_404(lista_relacionamento[3].informativo)

    informativos = []
    for iten in lista_relacionamento:
        dado = Informativos.query.get_or_404(iten.informativo)
        informativos.append(dado)

    lista_informativos = []
    for info in informativos:
        objetoInformativo = {}
        Assunto = info.assunto

        if Assunto == "Avaliação":
            #dadosAdicionais = Dados_avaliacoes.query.get_or_404(info.ID_informativo) <-- Resolver problema de GET de dados aidcionais 
            #materia = Materias.query.get_or_404(info.materia)
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao
                    #"tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    #"materia": materia.nomeMateria,
                    #"assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    #"dataAvaliacao": dadosAdicionais.dataAvaliacao
                }
            
        elif  Assunto == "Evento":
            #dadosAdicionais = Dados_eventos.query.get_or_404(info.ID_informativo)
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao
                    #"nomeEvento": dadosAdicionais.nomeEvento,
                    #"data_InicioEvento": dadosAdicionais.data_InicioEvento,
                    #"data_FinalEvento": dadosAdicionais.data_FinalEvento,
                    #"hora_InicioEvento": dadosAdicionais.hora_InicioEvento,
                    #"hora_FinalEvento": dadosAdicionais.hora_FinalEvento
                }
           
        elif Assunto == "Material Didatico":
            #dadosAdicionais = Dados_materiais.query.get_or_404(info.ID_informativo)
            #materia = Materias.query.get_or_404(dadosAdicionais.materia)
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao,
                    #"materia": materia.nomeMateria
                    #"assuntoMaterial": dadosAdicionais.assuntoMaterial
                }
            
        else:
            objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao
                }
            

        lista_informativos.append(objetoInformativo)
    
    print("--------------------")
    print(lista_informativos)


    return lista_informativos