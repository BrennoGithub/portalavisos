#Função GET
def GET_informartivos(Informativos, Turma_informativo, session, Dados_avaliacoes, Dados_eventos, Dados_materiais, Materias, Arquivos, Informativo_arquivo):
    lista = Turma_informativo.query.filter_by(turma=session["ID_turma"]) #Lista informativos-turma
    informativos = [] # Informativos da turma 
    for iten in lista:
        info = Informativos.query.get_or_404(iten.informativo)
        informativos.append(info)

    lista_informativos = []
    for iten in informativos:
        match iten.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.get_or_404(iten.ID_informativo)
                materia = Materias.query.get_or_404(iten.materia)
                lista_arquivo = Informativo_arquivo.query.filter_by(informativo=iten.ID_informativo)
                arquivo = Arquivos.query.get_or_404(lista_arquivo.arquivo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao,
                    "tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    "materia": materia.nomeMateria,
                    "assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    "dataAvaliacao": dadosAdicionais.dataAvaliacao,
                    "arquivo": arquivo
                }
                lista_informativos.append(objetoInformativo)

            case "Evento":
                dadosAdicionais = Dados_eventos.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao,
                    "nomeEvento": dadosAdicionais.nomeEvento,
                    "data_InicioEvento": dadosAdicionais.data_InicioEvento,
                    "data_FinalEvento": dadosAdicionais.data_FinalEvento,
                    "hora_InicioEvento": dadosAdicionais.hora_InicioEvento,
                    "hora_FinalEvento": dadosAdicionais.hora_FinalEvento
                }
                lista_informativos.append(objetoInformativo)

            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.get_or_404(iten.ID_informativo)
                materia = Materias.query.get_or_404(iten.materia)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)

            case _:
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao,
                    "materia": materia.nomeMateria,
                    "assuntoMaterial": iten.assuntoMaterial
                }
                lista_informativos.append(objetoInformativo)

    return lista_informativos