#Função GET
def GET_informartivos(Informativos, Turma_informativo, session, Dados_avaliacoes, Dados_eventos, Dados_materiais):
    lista = Turma_informativo.query.filter_by(turma=session["ID_turma"])
    informativos = []
    for iten in lista:
        info = Informativos.query.get_or_404(iten.informativo)
        informativos.append(info)

    lista_informativos = []
    for iten in informativos:
        match iten.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao,
                    "tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    "assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    "dataAvaliacao": dadosAdicionais.dataAvaliacao,
                }
                lista_informativos.append(objetoInformativo)
            case "Evento":
                dadosAdicionais = Dados_eventos.query.get_or_404(iten.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": iten.ID_informativo,
                    "assunto": iten.assunto,
                    "mensagem": iten.mensagem,
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)
            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.get_or_404(iten.ID_informativo)
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
                    "dataCriacao": iten.dataCriacao
                }
                lista_informativos.append(objetoInformativo)
    return lista_informativos