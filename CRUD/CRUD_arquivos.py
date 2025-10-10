#Função GET
def GET_arquivos(Informativo_arquivo, Arquivos, ID_informativo):
    lista_arquivo = Informativo_arquivo.query.filter_by(informativo=ID_informativo).all()

    arquivos = []
    for obj in lista_arquivo:
        arquivo = Arquivos.query.filter_by(arquivo=obj.arquivo).first()
        arquivos.append(arquivo)
        
    lista_arquivos = []
    for iten in arquivos:
        objetoArquivo = {
            "ID_arquivo": iten.ID_arquivo,
            "tipoArquivo": iten.tipoArquivo,
            "dataRegistro": iten.dataRegistro,
            "arquivo": iten.arquivo
        }
        lista_arquivos.append(objetoArquivo)
    return lista_arquivos