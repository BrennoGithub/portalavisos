#Função GET
#VERIFICAR OS PROBLEMAS DA FUNÇÃO, POIS NÃO ESTAR CONSEGUINDO TRAZER OS INFORMATIVOS.
def GET_informartivos(Informativos, Turma_informativo, ID_turma, Dados_avaliacoes, Dados_eventos, Dados_materiais, Materias):
    lista_relacionamento = Turma_informativo.query.filter_by(turma=ID_turma).all() #Lista informativos-turma
    
    lista_informativos = []
    for iten in lista_relacionamento:
        info = Informativos.query.get_or_404(iten.informativo)

        match info.assunto:
            case "Avaliação":
                dadosAdicionais = Dados_avaliacoes.query.get_or_404(info.ID_informativo)
                materia = Materias.query.get_or_404(info.materia)
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao,
                    "tipoAvaliacao": dadosAdicionais.tipoAvaliacao,
                    "materia": materia.nomeMateria,
                    "assuntoAvaliacao": dadosAdicionais.assuntoAvaliacao,
                    "dataAvaliacao": dadosAdicionais.dataAvaliacao
                }
                lista_informativos.append(objetoInformativo)

            case "Evento":
                dadosAdicionais = Dados_eventos.query.get_or_404(info.ID_informativo)
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao,
                    "nomeEvento": dadosAdicionais.nomeEvento,
                    "data_InicioEvento": dadosAdicionais.data_InicioEvento,
                    "data_FinalEvento": dadosAdicionais.data_FinalEvento,
                    "hora_InicioEvento": dadosAdicionais.hora_InicioEvento,
                    "hora_FinalEvento": dadosAdicionais.hora_FinalEvento
                }
                lista_informativos.append(objetoInformativo)

            case "Material Didatico":
                dadosAdicionais = Dados_materiais.query.get_or_404(info.ID_informativo)
                materia = Materias.query.get_or_404(info.materia)
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao,
                    "materia": materia.nomeMateria,
                    "assuntoMaterial": info.assuntoMaterial
                }
                lista_informativos.append(objetoInformativo)

            case _:
                objetoInformativo = {
                    "ID_informativo": info.ID_informativo,
                    "assunto": info.assunto,
                    "mensagem": info.mensagem,
                    "dataCriacao": info.dataCriacao
                }
                lista_informativos.append(objetoInformativo)

    return lista_informativos