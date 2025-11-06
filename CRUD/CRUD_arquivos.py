from Modelos.Arquivos import *

#Função GET
def GET_arquivos(ID_informativo):
    lista_arquivo = Informativo_arquivo.query.filter_by(informativo=ID_informativo).all()

    arquivos = []
    for obj in lista_arquivo:
        arquivo = Arquivos.query.get_or_404(obj.arquivo)
        arquivos.append(arquivo)
        
    lista_arquivos = []
    for iten in arquivos:
        objetoArquivo = {}
        objetoArquivo["ID_arquivo"] = iten.ID_arquivo
        objetoArquivo["tipoArquivo"] = iten.tipoArquivo
        objetoArquivo["dataRegistro"] = iten.dataRegistro
        objetoArquivo["arquivo"] = iten.arquivo

        lista_arquivos.append(objetoArquivo)
    return lista_arquivos