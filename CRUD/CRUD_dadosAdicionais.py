#Função GET
def GET_dadosAdicionaL(DadosAdicionais, ID_informativo):
    dadoAdicional = DadosAdicionais.query.get_or_404(ID_informativo)
    return dadoAdicional